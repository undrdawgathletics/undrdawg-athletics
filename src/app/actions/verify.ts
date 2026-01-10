"use server";

import { createClient } from "@supabase/supabase-js";

export async function verifySerialNumber(serialNumber: string) {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const TABLE_NAME = process.env.SUPABASE_TABLE_NAME || "memorabilia";

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.error("Supabase credentials are not defined in environment variables.");
        return { success: false, error: "Configuration Error" };
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    try {
        // We search for the hologram number in the database
        // We assume the column is named 'hologram_number' as per our instructions
        const { data, error } = await supabase
            .from(TABLE_NAME)
            .select("*")
            .eq("hologram_number", serialNumber.trim())
            .single();

        if (error) {
            if (error.code === "PGRST116") {
                return { success: false, error: "Not Found" };
            }
            console.error("Supabase Query Error:", error);
            return { success: false, error: "Database Connection Error" };
        }

        if (data) {
            return {
                success: true,
                data: {
                    serial: data.hologram_number || serialNumber,
                    athlete: data.athlete || "Official UD Product",
                    origin: data.signing_location || "Philadelphia",
                    status: "Verified",
                    date: data.year_signed || "2025",
                },
            };
        }

        return { success: false, error: "Not Found" };
    } catch (error) {
        console.error("Verification Action Error:", error);
        return { success: false, error: "Internal Server Error" };
    }
}
