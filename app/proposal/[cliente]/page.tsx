'use client'

import dynamic from "next/dynamic"

const ConfirmButton = dynamic(
  () => import("@/app/components/ConfirmButton"),
  { ssr: false }
)

export default function ProposalPage({
  params
}: {
  params: { cliente: string }
}) {

  const token = params.cliente

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "40px 0" }}>

      <div
        id="proposal-document"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "60px 40px",
          textAlign: "center",
          background: "#000",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "12px",
          position: "relative",
          zIndex: 10
        }}
      >

        <h1 style={{
          fontSize: "40px",
          fontWeight: 500,
          letterSpacing: "0.04em",
          marginBottom: "6px",
          fontFamily: '"Playfair Display", serif'
        }}>
          NERO TALENT
        </h1>

        <p style={{
          fontSize: "14px",
          letterSpacing: "0.08em",
          opacity: 0.7,
          marginBottom: "40px"
        }}>
          SEARCH ENGAGEMENT
        </p>

        <p style={{ fontSize: "20px", marginBottom: "40px" }}>
          Cliente
        </p>

        <div style={{
          textAlign: "left",
          lineHeight: "1.6",
          background: "#111",
          padding: "30px",
          borderRadius: "10px",
          border: "1px solid #222"
        }}>

          <p>
            La presente ha lo scopo di formalizzare la proposta di collaborazione di NERO Talent
            per l’attività di ricerca e selezione.
          </p>

          <h3 style={{ marginTop: "30px" }}>Ambito del Servizio</h3>

          <p>
            NERO Talent supporta le aziende tecnologiche nell’identificazione,
            valutazione e presentazione di candidati qualificati per ruoli strategici.
          </p>

          <p>L’attività comprende:</p>

          <p>
            – definizione e allineamento del profilo ricercato<br/>
            – identificazione e valutazione dei candidati<br/>
            – presentazione di una shortlist qualificata<br/>
            – supporto durante l’intero processo di selezione fino alla chiusura
          </p>

          <p style={{ marginTop: "20px" }}>
            Durante il processo, il Cliente avrà inoltre accesso a un <b>NERO Client Portal</b>
            dedicato.
          </p>

        </div>

        <div style={{ marginTop: "40px", textAlign: "left" }}>
          <p style={{ opacity: 0.7 }}>NERO Talent</p>
          <p>Cristian Cresevich</p>
          <p>Founder</p>
        </div>

        <div style={{ marginTop: "40px" }}>
          <ConfirmButton token={token} />
        </div>

      </div>
    </div>
  )
}