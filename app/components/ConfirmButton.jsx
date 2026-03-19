'use client'

import { useState } from "react"

export default function ConfirmButton({ token }) {

  const [confirming, setConfirming] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const [nome, setNome] = useState("")
  const [ruolo, setRuolo] = useState("")

  async function confirmEngagement() {

  const oggi = new Date()
  const dataFirma = oggi.toLocaleDateString("it-IT")

  setConfirming(true)

  const res = await fetch("/api/accept-proposal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token,
      nome,
      ruolo
    })
  })

  console.log("STATUS:", res.status)

  let data = { success: false }

  try {
    data = await res.json()
  } catch (e) {}

  if (data.success) {

    const firmaDiv = document.createElement("div")
    firmaDiv.id = "firma-cliente"

    firmaDiv.innerHTML = `
      <div style="margin-top:40px;text-align:left">
        <p>Nome: ${nome}</p>
        <p>Ruolo: ${ruolo}</p>
        <p>Data: ${dataFirma}</p>
      </div>
    `

    const doc = document.getElementById("proposal-document")
    if (doc) doc.appendChild(firmaDiv)


    setConfirmed(true)

    
  }

  setConfirming(false)
}
        return (
        <div style={{ marginTop: "40px", textAlign: "center" }}>

          <div style={{ maxWidth: "400px", margin: "0 auto" }}>

            <input
              placeholder="Nome e Cognome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff"
              }}
            />

            <input
              placeholder="Ruolo"
              value={ruolo}
              onChange={(e) => setRuolo(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff"
              }}
            />

            <button
  onClick={() => {
    console.log("CLICK FUNCIONA")
    confirmEngagement()
  }}
>
  Conferma collaborazione
</button>


          </div>

        </div>
      )

    }