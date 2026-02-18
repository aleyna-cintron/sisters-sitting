import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
// Note: RESEND_API_KEY must be set in your environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 're_123'); // Fallback for build time


export async function POST(request: Request) {
    try {
        const { name, email, phone, service, message } = await request.json();

        // Basic validation
        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Two Tails Contact <onboarding@resend.dev>',
            to: ['oneidat89@gmail.com'],
            subject: `New Request: ${service} - ${name}`,
            html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
