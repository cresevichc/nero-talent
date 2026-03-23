'use client'

import { useState } from "react"
import html2pdf from "html2pdf.js"
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
    } catch (e) { }

    if (data.success) {
      setCliente(data.nome)

      const firmaDiv = document.createElement("div")
      firmaDiv.id = "firma-cliente"
      firmaDiv.style.opacity = "0"
      firmaDiv.style.transition = "opacity 0.6s ease"

      firmaDiv.innerHTML = `
  <div style="text-align:right">

    <p style="font-size:14px; margin:2px 0">
      ${nome}
    </p>

    <p style="font-size:13px; opacity:0.7; margin:2px 0">
      ${ruolo}
    </p>

    <p style="font-size:11px; opacity:0.5; margin-top:6px">
      ${dataFirma}
    </p>

  </div>
`

      const target = document.getElementById("client-signature")

      if (target) {
        target.appendChild(firmaDiv)

        setTimeout(() => {
          firmaDiv.style.opacity = "1"
        }, 50)
      }
      const element = document.getElementById("proposal-document")
      const clone = element.cloneNode(true)
      clone.style.boxShadow = "none"
      clone.style.borderRadius = "0"
      const cloneSignatureContainer = clone.querySelector("#client-signature")

      if (cloneSignatureContainer) {
        cloneSignatureContainer.innerHTML = `
    <div style="text-align:right">
      <p style="font-size:14px; margin:2px 0; font-weight:600; letter-spacing:0.04em">
  ${nome}
  </p>

<p style="font-size:13px; opacity:0.7; margin:2px 0">
  ${ruolo}
</p>
      <p style="font-size:11px; opacity:0.5; margin-top:6px">
        ${dataFirma}
      </p>
    </div>
  `
      }
      clone.style.padding = "20px"
      

      if (element) {
        // 👇 reducir espacio SOLO para PDF
        element.style.paddingTop = "20px"
        element.style.paddingBottom = "20px"

        // 👇 compactar header SOLO para PDF
        // 👇 compactar header SOLO para PDF (safe)
        try {
          const h1 = element.querySelector("h1")

          if (h1) {
            const header = h1.parentElement
            const pTags = header.querySelectorAll("p")

            h1.style.marginBottom = "2px"
            if (pTags[0]) pTags[0].style.marginBottom = "8px"
            if (pTags[1]) pTags[1].style.marginTop = "4px"
          }
        } catch (e) {
          console.log("header adjust error", e)
        }
        // 👇 compactar texto SOLO para PDF
        element.style.lineHeight = "1.6"

        const paragraphs = element.querySelectorAll("p")
        paragraphs.forEach(p => {
          p.style.marginTop = "8px"
          p.style.marginBottom = "8px"
        })
        const opt = {
          margin: [10, 10, 10, 10],
          filename: `NERO_Proposal_${cliente}.pdf`,
          image: { type: "jpeg", quality: 1 },
          html2canvas: {
            scale: 2,
            backgroundColor: "#0D0D0F",
            scrollY: 0
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
          }

        }

        await new Promise(resolve => setTimeout(resolve, 500))
        

        await html2pdf().set(opt).from(clone).save()

        // 👇 restaurar después
        element.style.paddingTop = ""
        element.style.paddingBottom = ""
      }

      setConfirmed(true)
      setNome("")
      setRuolo("")
      setTimeout(() => {
        setConfirmed(false)
      }, 2000)

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