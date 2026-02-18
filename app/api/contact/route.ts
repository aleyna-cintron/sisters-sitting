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

        // 1. Send notification to Admin
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'Two Tails Contact <onboarding@resend.dev>',
            to: ['aleynatcintron@gmail.com'], // Changed to your verified email for testing. Change back to oneidat89@gmail.com after domain verification.
            replyTo: email,
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

        if (adminError) {
            return NextResponse.json({ error: adminError.message }, { status: 400 });
        }

        // 2. Send confirmation to User
        // Note: In Resend sandbox mode, you can only send to verified emails.
        // We wrap this in a try-catch so the user still gets a success message even if this fails.
        try {
            await resend.emails.send({
                from: 'Two Tails Contact <onboarding@resend.dev>',
                to: [email],
                subject: `We've received your request! 🐾`,
                html: `
            <h2>Hi ${name},</h2>
            <p>Thank you for reaching out to Two Tails Dog Care! We have received your inquiry regarding <strong>${service}</strong>.</p>
            <p>We will review your message and get back to you as soon as possible.</p>
            <br/>
            <p>Best regards,</p>
            <p>Oneida & Janay<br/><strong>Two Tails Dog Care</strong></p>
          `,
            });
        } catch (userError) {
            console.warn('Confirmation email could not be sent:', userError);
        }

        return NextResponse.json({ success: true, data: adminData });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
