import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const SERVICE_LABELS: Record<string, string> = {
  automatic: 'Automatic Lessons',
  manual: 'Manual Lessons',
  intensive: 'Intensive Courses',
  refresher: 'Refresher Lessons',
  motorway: 'Motorway Lessons',
  mock: 'Mock Driving Tests',
  passplus: 'Pass Plus Course',
  other: 'Other',
};

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request.' }), { status: 400 });
  }

  const { fullname, mobile, email, postcode, service, _honey, recaptchaToken } = body;

  // Honeypot — silently drop bot submissions
  if (_honey) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  // Basic server-side field checks
  if (!fullname?.trim() || !mobile?.trim() || !postcode?.trim() || !service?.trim()) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
  }

  // reCAPTCHA Enterprise verification
  if (!recaptchaToken) {
    return new Response(JSON.stringify({ error: 'Verification missing. Please refresh and try again.' }), { status: 400 });
  }

  try {
    const captchaRes = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${import.meta.env.RECAPTCHA_PROJECT_ID}/assessments?key=${import.meta.env.RECAPTCHA_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: {
            token: recaptchaToken,
            siteKey: import.meta.env.RECAPTCHA_SITE_KEY,
            expectedAction: 'ENQUIRY',
          },
        }),
      }
    );
    const captchaData = await captchaRes.json();
    const valid = captchaData.tokenProperties?.valid === true;
    const score: number = captchaData.riskAnalysis?.score ?? 0;
    if (!valid || score < 0.5) {
      return new Response(JSON.stringify({ error: 'Verification failed. Please try again.' }), { status: 400 });
    }
  } catch {
    return new Response(JSON.stringify({ error: 'Could not verify your submission. Please try again.' }), { status: 500 });
  }

  const serviceLabel = SERVICE_LABELS[service] ?? service;
  const hasEmail = email && email.trim().length > 0;

  try {
    // Notify the school
    await resend.emails.send({
      from: 'York Driving Lesson <enquiries@yorkdrivinglesson.co.uk>',
      to: ['support@yorkdrivinglesson.co.uk'],
      ...(hasEmail ? { replyTo: email.trim() } : {}),
      subject: `New Enquiry — ${serviceLabel} — ${fullname.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #111827; margin-bottom: 20px; font-size: 20px;">New Enquiry from York Driving Lesson Website</h2>
          <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 14px 18px; font-weight: bold; color: #374151; width: 140px; background: #f3f4f6;">Full Name</td>
              <td style="padding: 14px 18px; color: #111827;">${fullname.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 14px 18px; font-weight: bold; color: #374151; background: #f3f4f6;">Mobile</td>
              <td style="padding: 14px 18px; color: #111827;"><a href="tel:${mobile.trim()}" style="color: #1d4ed8;">${mobile.trim()}</a></td>
            </tr>
            ${hasEmail ? `
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 14px 18px; font-weight: bold; color: #374151; background: #f3f4f6;">Email</td>
              <td style="padding: 14px 18px; color: #111827;"><a href="mailto:${email.trim()}" style="color: #1d4ed8;">${email.trim()}</a></td>
            </tr>` : ''}
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 14px 18px; font-weight: bold; color: #374151; background: #f3f4f6;">Postcode</td>
              <td style="padding: 14px 18px; color: #111827;">${postcode.trim().toUpperCase()}</td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; font-weight: bold; color: #374151; background: #f3f4f6;">Service</td>
              <td style="padding: 14px 18px; color: #111827;">${serviceLabel}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #6b7280; font-size: 13px;">Submitted via yorkdrivinglesson.co.uk</p>
        </div>
      `,
    });

    // Send confirmation to enquirer if they provided an email
    if (hasEmail) {
      await resend.emails.send({
        from: 'York Driving Lesson <enquiries@yorkdrivinglesson.co.uk>',
        to: [email.trim()],
        subject: 'We received your enquiry — York Driving Lesson',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
            <h2 style="color: #111827; margin-bottom: 16px; font-size: 20px;">Thanks for getting in touch, ${fullname.trim().split(' ')[0]}!</h2>
            <p style="color: #374151; font-size: 15px; line-height: 1.6; margin-bottom: 16px;">We've received your enquiry about <strong>${serviceLabel}</strong> and we'll be in touch shortly.</p>
            <p style="color: #374151; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">In the meantime, feel free to call or WhatsApp us on <a href="tel:+447763999317" style="color: #1d4ed8;">07763 999317</a> if you'd like to speak to us sooner.</p>
            <p style="color: #6b7280; font-size: 13px; margin: 0;">York Driving Lesson &bull; <a href="https://yorkdrivinglesson.co.uk" style="color: #6b7280;">yorkdrivinglesson.co.uk</a></p>
          </div>
        `,
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email. Please try again.' }), { status: 500 });
  }
};
