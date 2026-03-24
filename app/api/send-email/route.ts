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
<div style="text-align:center;">

  <img 
    src="https://i.imgur.com/KWAv3C9.png"
    alt="NERO Talent"
    style="max-width:600px; width:100%; height:auto; margin-bottom:24px;"
  />

  <p style="font-family: Arial, Helvetica, sans-serif; font-size:14px; color:#555;">
    Il documento firmato è allegato a questa email.
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
