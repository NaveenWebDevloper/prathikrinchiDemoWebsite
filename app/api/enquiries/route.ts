import { NextRequest, NextResponse } from "next/server";

interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  preferredMethod?: string;
  _honeypot?: string; // Bot protection
}

// In-memory rate limiting tracker (per IP)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - rateData.lastReset > RATE_LIMIT_WINDOW_MS) {
      rateData.count = 1;
      rateData.lastReset = now;
    } else {
      rateData.count += 1;
    }
    rateLimitMap.set(ip, rateData);

    if (rateData.count > MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse and validate JSON
    const body: EnquiryPayload = await request.json();

    // 3. Spam Honeypot check: If the hidden honeypot field is filled, silently reject bot
    if (body._honeypot && body._honeypot.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Enquiry received successfully." },
        { status: 200 }
      );
    }

    // 4. Server-side validation
    const { name, email, phone, service, message } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid contact telephone number." },
        { status: 400 }
      );
    }

    if (!service || service.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please select the relevant practice area." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide brief context for your enquiry (minimum 10 characters).",
        },
        { status: 400 }
      );
    }

    // Sanitized payload ready for CRM / SMTP / database
    const sanitizedEnquiry = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      phone: phone.trim().slice(0, 30),
      company: body.company ? body.company.trim().slice(0, 100) : "Not specified",
      service: service.trim().slice(0, 100),
      preferredMethod: body.preferredMethod || "Email",
      message: message.trim().slice(0, 2000),
      submittedAt: new Date().toISOString(),
      clientIp: ip,
    };

    // Logging for audit trail (excluding sensitive secrets)
    console.log(
      `[Enquiry Received] Practice: ${sanitizedEnquiry.service} | From: ${sanitizedEnquiry.name} (${sanitizedEnquiry.email})`
    );

    // Production hook: Here the application can forward to Resend, Sendgrid, CRM, or local database
    // e.g. await sendEmailNotification(sanitizedEnquiry);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your enquiry. CA Pratik Vinchhi and our practice team will review your requirements and respond within one business day.",
        referenceId: `PV-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Enquiry API Error]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
