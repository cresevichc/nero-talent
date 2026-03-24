export const runtime = "nodejs"
import { NextResponse } from "next/server"
const Resend = require("resend").Resend

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { nome, cliente, emailCliente, pdfBase64 } = body
    console.log("EMAIL DATA:", {
    nome,
    cliente,
    emailCliente
    })
    const response = await resend.emails.send({
      
      from: "NERO Talent <info@nerotalent.com>",
      to: ["cristian@nerotalent.com", emailCliente],
      subject: `Proposal firmata - ${cliente}`,
      html: `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#111;">

    <p style="font-size:16px; margin-bottom:16px;">
      La proposta è stata finalizzata.
    </p>

    <p style="margin-bottom:8px;">
      <strong>Azienda:</strong> ${cliente}
    </p>

    <p style="margin-bottom:24px;">
      <strong>Firmato da:</strong> ${nome}
    </p>

    <p style="font-size:14px; color:#555;">
      Il documento firmato è allegato a questa email.
    </p>

    <p style="margin-top:32px; font-size:14px; color:#777;">
      <strong>NERO Talent</strong><br/>
      Technology Talent Advisory
    </p>

  </div>
`,
      attachments: [
        {
          filename: "NERO_Proposal.pdf",
          content: pdfBase64.split(",")[1],
        },
      ],
    })
    console.log("EMAIL RESPONSE:", response)
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false })
  }
}
