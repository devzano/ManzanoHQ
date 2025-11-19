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

    const to = process.env.NOTIFY_TO_EMAIL;
    const from = process.env.NOTIFY_FROM_EMAIL;

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

    const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <title>${subject}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0;padding:0;background-color:#020617;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">
    <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#020617;padding:32px 16px 40px;">
      <tr>
        <td align="center">
          <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:640px;border-radius:24px;background-color:rgba(15,23,42,0.96);border:1px solid rgba(148,163,184,0.35);overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="padding:20px 24px 8px;border-bottom:1px solid rgba(148,163,184,0.25);background:linear-gradient(135deg,rgba(56,189,248,0.16),transparent 55%);">
                <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(226,232,240,0.7);margin-bottom:4px;">
                  ManzanoHQ • New Hire Inquiry
                </div>
                <div style="font-size:18px;font-weight:600;color:#f9fafb;">
                  ${name} wants to work with you
                </div>
              </td>
            </tr>

            <!-- Meta section -->
            <tr>
              <td style="padding:16px 24px 8px;">
                <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style="font-size:14px;color:#e5e7eb;">
                  <tr>
                    <td style="padding:4px 0;width:90px;color:rgba(148,163,184,0.9);font-size:12px;text-transform:uppercase;letter-spacing:0.14em;">
                      Name
                    </td>
                    <td style="padding:4px 0;font-weight:500;">
                      ${name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;color:rgba(148,163,184,0.9);font-size:12px;text-transform:uppercase;letter-spacing:0.14em;">
                      Email
                    </td>
                    <td style="padding:4px 0;">
                      <a href="mailto:${email}" style="color:rgba(56,189,248,0.9);text-decoration:none;">
                        ${email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;color:rgba(148,163,184,0.9);font-size:12px;text-transform:uppercase;letter-spacing:0.14em;">
                      About
                    </td>
                    <td style="padding:4px 0;color:#e5e7eb;">
                      ${about ? escapeHtml(about) : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;color:rgba(148,163,184,0.9);font-size:12px;text-transform:uppercase;letter-spacing:0.14em;">
                      Budget
                    </td>
                    <td style="padding:4px 0;color:#e5e7eb;">
                      ${budget ? escapeHtml(budget) : '-'}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:8px 24px 20px;">
                <div style="margin-top:8px;margin-bottom:6px;font-size:12px;text-transform:uppercase;letter-spacing:0.16em;color:rgba(148,163,184,0.9);">
                  Project details
                </div>
                <div style="padding:12px 14px;border-radius:16px;border:1px solid rgba(148,163,184,0.35);background-color:rgba(15,23,42,0.9);font-size:14px;line-height:1.6;white-space:pre-wrap;color:#e5e7eb;">
                  ${escapeHtml(message)}
                </div>
              </td>
            </tr>

            <!-- Footer / CTA -->
            <tr>
              <td style="padding:0 24px 22px;">
                <table role="presentation" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td>
                      <a
                        href="mailto:${email}"
                        style="
                          display:inline-block;
                          padding:10px 18px;
                          border-radius:999px;
                          border:1px solid rgba(56,189,248,0.75);
                          background:linear-gradient(90deg,rgba(56,189,248,0.16),rgba(59,130,246,0.18));
                          color:#e0f2fe;
                          font-size:13px;
                          font-weight:600;
                          text-decoration:none;
                        "
                      >
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
                <div style="margin-top:12px;font-size:11px;color:rgba(148,163,184,0.85);">
                  This email was generated from the ManzanoHQ hire form.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      text,
      html,
    });

    if (error) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 });
  }
}

/**
 * HTML escape helper to avoid breaking markup
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
