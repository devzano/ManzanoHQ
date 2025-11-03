import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // Notify you on each subscription (swap to a real list later if you want)
    await resend.emails.send({
      from: 'ManzanoHQ <notify@your-domain.com>',
      to: process.env.NOTIFY_TO_EMAIL ?? 'you@example.com',
      subject: 'New newsletter signup',
      text: `New subscriber: ${email}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}