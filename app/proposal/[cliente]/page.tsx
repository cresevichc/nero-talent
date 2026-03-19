'use client'
import { useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const ConfirmButton = dynamic(
  () => import("@/app/components/ConfirmButton"),
  { ssr: false }
)

export default function ProposalPage({
  params
}: {
  params: { cliente: string }
}) {

  const searchParams = useSearchParams()
  const token = searchParams.get("token") || params.cliente
  const [cliente, setCliente] = useState("")
  useEffect(() => {
    async function fetchCliente() {
      try {
        const res = await fetch(`/api/get-proposal`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token })
        })
        const data = await res.json()
        console.log("DATA API:", JSON.stringify(data))

        if (data.success) {
          setCliente(data.nome)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (token) {
      fetchCliente()
    }
  }, [token])

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "40px 0" }}>

      <div style={{
  textAlign: "left",
  maxWidth: "640px",
  margin: "0 auto",
  marginTop: "30px"
}}>

  {/* INTRODUCTION */}
  <div style={{ marginTop: "20px" }}>
    <p style={{
      fontSize: "12px",
      letterSpacing: "0.12em",
      opacity: 0.6,
      marginBottom: "10px"
    }}>
      INTRODUCTION
    </p>

    <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
      La presente ha lo scopo di formalizzare la proposta di collaborazione di NERO Talent
      per l’attività di ricerca e selezione.
    </p>
  </div>

  {/* SCOPE */}
  <div style={{ marginTop: "30px" }}>
    <p style={{
      fontSize: "12px",
      letterSpacing: "0.12em",
      opacity: 0.6,
      marginBottom: "10px"
    }}>
      SCOPE
    </p>

    <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
      NERO Talent supporta le aziende tecnologiche nell’identificazione, valutazione e
      presentazione di candidati qualificati per ruoli strategici.
    </p>

    <p style={{ marginTop: "10px", fontSize: "14px" }}>
      – definizione e allineamento del profilo ricercato<br />
      – identificazione e valutazione dei candidati<br />
      – presentazione di una shortlist qualificata<br />
      – supporto durante l’intero processo fino alla chiusura
    </p>

    <p style={{ marginTop: "14px", fontSize: "14px" }}>
      Accesso a un <b>NERO Client Portal</b> dedicato per monitorare lo stato della ricerca
      e i candidati presentati in tempo reale.
    </p>
  </div>

  {/* FEES */}
  <div style={{ marginTop: "30px" }}>
    <p style={{
      fontSize: "12px",
      letterSpacing: "0.12em",
      opacity: 0.6,
      marginBottom: "10px"
    }}>
      FEES
    </p>

    <p style={{ fontSize: "14px" }}>
      20% della RAL
    </p>

    <p style={{ marginTop: "6px", fontSize: "14px" }}>
      17% della RAL in caso di pagamento entro 7 giorni
    </p>
  </div>

  {/* GUARANTEE */}
  <div style={{ marginTop: "30px" }}>
    <p style={{
      fontSize: "12px",
      letterSpacing: "0.12em",
      opacity: 0.6,
      marginBottom: "10px"
    }}>
      GUARANTEE
    </p>

    <p style={{ fontSize: "14px" }}>
      Garanzia di sostituzione di 90 giorni.
    </p>

    <p style={{ marginTop: "6px", fontSize: "14px" }}>
      Riattivazione della ricerca senza costi aggiuntivi in caso di interruzione.
    </p>
  </div>

  {/* TERMS */}
  <div style={{ marginTop: "30px" }}>
    <p style={{
      fontSize: "12px",
      letterSpacing: "0.12em",
      opacity: 0.6,
      marginBottom: "10px"
    }}>
      TERMS
    </p>

    <p style={{ fontSize: "14px" }}>
      Fee dovuta in caso di assunzione entro 12 mesi.
    </p>

    <p style={{ marginTop: "6px", fontSize: "14px" }}>
      Validità della proposta: 30 giorni.
    </p>

    <p style={{ marginTop: "6px", fontSize: "14px" }}>
      Le condizioni complete saranno regolate dal contratto.
    </p>
  </div>

</div>
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "60px",
    alignItems: "flex-end"
  }}
>

  {/* NERO */}
  <div>
    <p style={{
      fontSize: "12px",
      letterSpacing: "0.12em",
      opacity: 0.5,
      marginBottom: "14px"
    }}>
      NERO TALENT
    </p>

    <p style={{ fontSize: "16px" }}>
      Cristian Cresevich
    </p>

    <p style={{ fontSize: "13px", opacity: 0.7 }}>
      Founder
    </p>
  </div>

  {/* CLIENTE */}
  <div style={{ textAlign: "right" }}>
    <p style={{
      fontSize: "12px",
      letterSpacing: "0.12em",
      opacity: 0.5,
      marginBottom: "14px"
    }}>
      CLIENTE
    </p>

    <p style={{ fontSize: "16px" }}>
      {cliente || "__________________"}
    </p>

    <div id="client-signature" style={{ marginTop: "10px" }} />
  </div>
</div>
</div> {/* cierre proposal-document */}


      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <ConfirmButton token={token} />
      </div>

    </div>
  )
}