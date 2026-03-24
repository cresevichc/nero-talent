export const runtime = "nodejs"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { nome, cliente, emailCliente, pdfBase64 } = body

    await resend.emails.send({
      from: "NERO Talent <onboarding@resend.dev>",
      to: ["cristian@nerotalent.com", emailCliente],
      subject: `Proposal firmata - ${cliente}`,
      html: `
        <p>La proposal è stata firmata.</p>
        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Firmato da:</strong> ${nome}</p>
      `,
      attachments: [
        {
          filename: "NERO_Proposal.pdf",
          content: pdfBase64.split(",")[1],
        },
      ],
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false })
  }
}