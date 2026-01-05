"use server";

export async function verifySerialNumber(serialNumber: string) {
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const BASE_ID = "app8XF2MMtK2A2wUA";
    const TABLE_NAME = "Authenticity"; // Defaulting to 'Authenticity', user can adjust

    if (!AIRTABLE_TOKEN) {
        console.error("AIRTABLE_TOKEN is not defined in environment variables.");
        return { success: false, error: "Configuration Error" };
    }

    try {
        // Airtable API uses a filterByFormula to find the specific record
        // Assumes the field in Airtable is named "Serial"
        const filter = encodeURIComponent(`{Serial} = '${serialNumber.trim()}'`);
        const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?filterByFormula=${filter}`;

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            },
            next: { revalidate: 0 }, // Ensure we don't cache verification results
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Airtable API Error:", errorData);
            return { success: false, error: "Database Connection Error" };
        }

        const data = await response.json();

        if (data.records && data.records.length > 0) {
            const record = data.records[0].fields;
            return {
                success: true,
                data: {
                    serial: record.Serial,
                    athlete: record.Athlete || "Official UD Product",
                    origin: record.Origin || "Philly HQ",
                    status: record.Status || "Verified",
                    date: record.Date || "Recent Drop",
                },
            };
        }

        return { success: false, error: "Not Found" };
    } catch (error) {
        console.error("Verification Action Error:", error);
        return { success: false, error: "Internal Server Error" };
    }
}
