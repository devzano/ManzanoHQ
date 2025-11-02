// app/api/hire/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, about, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const to = process.env.HIRE_TO_EMAIL;
    const from = process.env.HIRE_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json({ error: 'Server email is not configured.' }, { status: 500 });
    }

    const subject = `New Hire Inquiry • ${name}`;
    const text = `
New hire request from ManzanoHQ
--------------------------------

Name: ${name}
Email: ${email}
About: ${about || '-'}
Budget: ${budget || '-'}

Message:
${message}
`.trim();

    // You can also send html instead of text; text is robust and simple.
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email, // lets you reply directly
      text,
    });

    if (error) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 });
  }
}