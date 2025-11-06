import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Please fill all fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 })
    }

    // Log the contact request (replace with your email service)
    console.log("Contact form submission:", { name, email, message })

    // Here you can integrate with email services like:
    // - Resend: https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Nodemailer: https://nodemailer.com
    // - AWS SES: https://aws.amazon.com/ses/

    return NextResponse.json(
      {
        success: true,
        message: "Message received! We will get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
