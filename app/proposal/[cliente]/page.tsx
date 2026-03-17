import ConfirmButton from "@/app/components/ConfirmButton"
import { google } from "googleapis"

export default async function ProposalPage({
  params
}: {
  params: { cliente: string }
}) {

  const token = params.cliente

  const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || "{}")

  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })

  const sheets = google.sheets({ version: "v4", auth })

  const spreadsheetId = "14319GonzQ8GupZ6VdYxrDZSJW8ikrRdiv9o1Cp1NeYE"

  const read = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "ACTIVE HIRING!A:Z"
  })

  const rows = read.data.values || []

  let match = null

  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][9] || "").toString().trim() === token.trim()) {
      match = rows[i]
      break
    }
  }

  if (!match) {
    return (
      <div style={{ background: "#000", minHeight: "100vh", padding: "40px", color: "#fff" }}>
        <h1>Proposal not available</h1>
        <p>Invalid proposal link.</p>
      </div>
    )
  }

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>

        <h1>NERO TALENT</h1>

        <p style={{ marginTop: "20px" }}>
          {match[0]}
        </p>

        <ConfirmButton token={token} />

      </div>
    </div>
  )
}