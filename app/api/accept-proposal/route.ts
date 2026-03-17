import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  try {

    const body = await req.json()
    const { token } = body
    

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

    let rowIndex = -1

    for (let i = 1; i < rows.length; i++) {



  if ((rows[i][9] || "").trim() === token.trim()) {
    rowIndex = i + 1
    break
  }
}

    if (rowIndex === -1) {
      return NextResponse.json({ success: false })
    }

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `ACTIVE HIRING!N${rowIndex}`,
      valueInputOption: "RAW",
      requestBody: {
        values: [["Accettata"]]
      }
    })

    return NextResponse.json({ success: true })

  } catch (error) {

    console.error(error)
    return NextResponse.json({ success: false })

  }

}