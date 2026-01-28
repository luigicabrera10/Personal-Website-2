'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['luigi.cabrera.h@gmail.com'], // Where you want to receive the mail
            subject: subject,
            text: `Send by: ${name}\n` + message,
        });

        if (error) return { success: false };
        return { success: true };
    } catch (e) {
        return { success: false };
    }
}