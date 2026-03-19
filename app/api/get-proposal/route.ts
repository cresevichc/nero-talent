import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function GET(req: Request) {

  try {

    const { searchParams } = new URL(req.url)
    const url = new URL(req.url)
const tokenFromQuery = url.searchParams.get("token")

// fallback: coger token desde la URL (/proposal/[cliente])
const pathParts = url.pathname.split("/")
const tokenFromPath = pathParts[pathParts.length - 1]

const token = (tokenFromQuery || tokenFromPath || "").trim()

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

    const tokenIndex = 9

    let match = null

    for (let i = 1; i < rows.length; i++) {
      const cell = (rows[i][tokenIndex] || "").toString().trim()

      if (cell.includes(token)) {
        match = rows[i]
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