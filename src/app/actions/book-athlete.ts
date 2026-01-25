"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function bookAthlete(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string; // Assuming we want to add an email field for the user too? The plan didn't explicitly say but it's good practice. Wait, the form didn't have email. Let's stick to the form structure for now or add it? The form in `src/app/book/page.tsx` has: firstName, lastName, date, description. NO EMAIL field for the customer.
    // Wait, if we want to contact them back, we need their contact info. The previous form didn't have it?
    // Let me re-read `src/app/book/page.tsx` content from step 114.
    // It has: firstName, lastName, date, description.
    // It DOES NOT have an email or phone field. That is a major omission for a contact form.
    // I should probably add an email field to the form as well, otherwise they can't be contacted.
    // use `formData` from the client.

    const date = formData.get("date") as string;
    const description = formData.get("description") as string;

    if (!process.env.RESEND_API_KEY) {
        return { success: false, error: "Missing API Key" };
    }

    try {
        const data = await resend.emails.send({
            from: "Undrdawg Booking <onboarding@resend.dev>", // Default for testing
            to: ["delivered@resend.dev"], // Default for testing, user should update this
            subject: `New Booking Request: ${firstName} ${lastName}`,
            html: `
        <h1>New Athlete Booking Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Date Requested:</strong> ${date}</p>
        <p><strong>Details:</strong></p>
        <p>${description}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}
