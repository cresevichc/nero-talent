import { google } from "googleapis"
import { NextResponse } from "next/server"


export async function POST(req: Request) {

  try {

    const body = await req.json()
    const { token } = body
    console.log("TOKEN FRONT:", token)
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

    const headers = rows[0] || []
    console.log("ROWS LENGTH:", rows.length)
 
    const tokenIndex = 9

    let match = null
    let rowIndex = -1

    for (let i = 1; i < rows.length; i++) {
      const cell = (rows[i][tokenIndex] || "").toString().trim()
      console.log("TOKEN SHEET:", cell)

      if (cell.trim() === token.trim()) {
        match = rows[i]
        rowIndex = i + 1
        break
      }
    }

    if (!match || rowIndex === -1) {
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

    return NextResponse.json({
      success: true,
      nome: match[0] || ""
    })

  } catch (error) {

    console.error(error)
    return NextResponse.json({ success: false })

  }

}