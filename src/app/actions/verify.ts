"use server";

export async function verifySerialNumber(serialNumber: string) {
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const BASE_ID = "app8XF2MMtK2A2wUA";
    const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Memorabilia Authenticator";

    if (!AIRTABLE_TOKEN) {
        console.error("AIRTABLE_TOKEN is not defined in environment variables.");
        return { success: false, error: "Configuration Error" };
    }

    try {
        // UPDATED: Using 'Hologram Number' as seen in your screenshot
        const filter = encodeURIComponent(`{Hologram Number} = '${serialNumber.trim()}'`);

        // Try the provided name first (properly encoded for spaces)
        let url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}?filterByFormula=${filter}`;

        let response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            },
            next: { revalidate: 0 },
        });

        if (!response.ok) {
            // Fallback: Check if the table is actually just named "Table 1"
            const fallbackUrl = `https://api.airtable.com/v0/${BASE_ID}/Table%201?filterByFormula=${filter}`;
            response = await fetch(fallbackUrl, {
                headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
                next: { revalidate: 0 },
            });
        }

        if (!response.ok) {
            console.error("Airtable Connection Failed. Check Table Name and Token Permissions.");
            return { success: false, error: "Connection Error" };
        }

        const data = await response.json();

        if (data.records && data.records.length > 0) {
            const record = data.records[0].fields;
            return {
                success: true,
                data: {
                    serial: record["Hologram Number"] || serialNumber,
                    athlete: record["Athlete"] || "Official UD Product",
                    origin: record["Signing Location"] || "Philadelphia",
                    status: "Verified",
                    date: record["Year Signed"] || "2025",
                },
            };
        }

        return { success: false, error: "Not Found" };
    } catch (error) {
        console.error("Verification Action Error:", error);
        return { success: false, error: "Internal Server Error" };
    }
}
