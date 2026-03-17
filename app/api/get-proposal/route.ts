import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function GET(req: Request) {

  try {

    const { searchParams } = new URL(req.url)
    const token = searchParams.get("token") || ""

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

    const match = rows.find((row: any[]) =>
  row.some((cell) =>
    (cell || "").toString().trim().toLowerCase() === token.trim().toLowerCase()
  )
)

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