'use client'

import { useState } from "react"

export default function ConfirmButton({ token }) {

  const [confirming, setConfirming] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const [nome, setNome] = useState("")
  const [ruolo, setRuolo] = useState("")
  const [cliente, setCliente] = useState("")

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
    setCliente(data.nome)

    const firmaDiv = document.createElement("div")
    firmaDiv.id = "firma-cliente"
    firmaDiv.style.opacity = "0"
    firmaDiv.style.transition = "opacity 0.6s ease"

    firmaDiv.innerHTML = `
  <div style="margin-top:60px; text-align:left; border-top:1px solid rgba(255,255,255,0.2); padding-top:20px">
    
    <p style="opacity:0.6; font-size:12px; margin-bottom:10px">
      Firma del Cliente
    </p>

    <p style="font-size:16px; margin:4px 0">
      ${nome}
    </p>

    <p style="font-size:14px; opacity:0.7; margin:4px 0">
      ${ruolo}
    </p>

    <p style="font-size:12px; opacity:0.5; margin-top:10px">
      ${dataFirma}
    </p>

  </div>
`
    

    const doc = document.getElementById("proposal-document")

  if (doc) {
  doc.appendChild(firmaDiv)

  setTimeout(() => {
    firmaDiv.style.opacity = "1"
  }, 50)
  }

    setConfirmed(true)
    setNome("")
    setRuolo("")

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
  onClick={confirmEngagement}
  disabled={confirming || confirmed}
  style={{
    padding: "14px 28px",
    background: confirmed ? "#39FF14" : "transparent",
    color: confirmed ? "#000" : "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    cursor: confirming ? "not-allowed" : "pointer",
    opacity: confirming ? 0.6 : 1,
    borderRadius: "999px",
    transition: "all 0.3s ease",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontSize: "12px"
  }}
>
  {confirming
    ? "Confermando..."
    : confirmed
    ? "Firmato"
    : "Firma e conferma"}
</button>

          </div>

        </div>
      )

    }