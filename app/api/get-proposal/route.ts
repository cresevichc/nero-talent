import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  try {

const body = await req.json()
const token = (body.token || "").trim()


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
    console.log("ROWS:", JSON.stringify(rows))

    const headers = rows[0] || []

const tokenIndex = headers.findIndex((h: string) =>
  h && h.toString().trim().toLowerCase() === "token"
)

    let match = null

    for (let i = 1; i < rows.length; i++) {
  const row = rows[i]

  const found = row.some((col: any) =>
    col && col.toString().trim() === token
  )

  if (found) {
    match = row
    break
  }
}

    if (!match) {
      return NextResponse.json({ success: false })
    }

    return NextResponse.json({
      success: true,
      nome: match[0] || ""
    })

  } catch (error) {

    console.error(error)
    return NextResponse.json({ success: false })

  }

}