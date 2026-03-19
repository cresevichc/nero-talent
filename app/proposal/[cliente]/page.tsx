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

    <div
      id="proposal-document"
      style={{
        maxWidth: "820px",
        margin: "0 auto",
        padding: "40px",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.05)",
        background: "#0D0D0F",
        color: "#F5F7FA"
      }}
    >

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{
          fontSize: "32px",
          fontWeight: 400,
          letterSpacing: "0.12em",
          marginBottom: "10px"
        }}>
          NERO TALENT
        </h1>

        <p style={{
          fontSize: "12px",
          letterSpacing: "0.2em",
          opacity: 0.6,
          marginBottom: "30px"
        }}>
          SEARCH ENGAGEMENT
        </p>

        <p style={{
          fontSize: "20px",
          opacity: 0.8
        }}>
          {cliente}
        </p>
      </div>

      {/* CONTENIDO */}
      <div style={{ lineHeight: "1.8", fontSize: "14px" }}>

        <p>
  La presente ha lo scopo di formalizzare la proposta di collaborazione di NERO Talent
  per l’attività di ricerca e selezione.
</p>

<p style={{ marginTop: "25px", fontWeight: "500" }}>
  Ambito del Servizio
</p>

<p>
  NERO Talent supporta le aziende tecnologiche nell’identificazione, valutazione e
  presentazione di candidati qualificati per ruoli strategici.
</p>

<p style={{ marginTop: "10px" }}>
  – definizione e allineamento del profilo ricercato<br />
  – identificazione e valutazione dei candidati<br />
  – presentazione di una shortlist qualificata<br />
  – supporto durante l’intero processo di selezione fino alla chiusura
</p>

<p style={{ marginTop: "15px" }}>
  Durante il processo, il Cliente avrà inoltre accesso a un <b>NERO Client Portal</b>
  dedicato, attraverso il quale sarà possibile monitorare lo stato della ricerca,
  visualizzare i candidati presentati e seguire l’evoluzione del processo in tempo reale.
</p>

<p style={{ marginTop: "25px", fontWeight: "500" }}>
  Compenso
</p>

<p>
  Il compenso per l’attività di ricerca e selezione è pari al <b>20% della Retribuzione Annua
  Lorda (RAL)</b>.
</p>

<p>
  In caso di pagamento entro <b>7 giorni</b>, il compenso sarà pari al <b>17% della RAL</b>.
</p>

<p style={{ marginTop: "25px", fontWeight: "500" }}>
  Garanzia
</p>

<p>
  NERO Talent offre una <b>garanzia di sostituzione di 90 giorni</b>.
</p>

<p>
  Qualora il rapporto si interrompa, la ricerca verrà riattivata senza costi aggiuntivi.
</p>

<p style={{ marginTop: "25px", fontWeight: "500" }}>
  Tutela della Presentazione
</p>

<p>
  Se il candidato viene assunto entro <b>12 mesi</b>, il compenso sarà comunque dovuto.
</p>

<p style={{ marginTop: "25px", fontWeight: "500" }}>
  Validità della Proposta
</p>

<p>
  La proposta ha validità di <b>30 giorni</b>.
</p>

<p style={{ marginTop: "25px", fontWeight: "500" }}>
  Chiusura
</p>

<p>
  Le condizioni complete saranno regolate dal contratto di incarico.
</p>

      </div>

      {/* FIRMA */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "60px"
      }}>

        <div>
          <p style={{ fontSize: "12px", opacity: 0.6 }}>NERO TALENT</p>
          <p>Cristian Cresevich</p>
          <p style={{ fontSize: "13px", opacity: 0.7 }}>Founder</p>
        </div>

        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "12px", opacity: 0.6 }}>CLIENTE</p>
          <p>{cliente || "__________"}</p>

          <div id="client-signature" />
        </div>

      </div>

    </div>

    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <ConfirmButton token={token} />
    </div>

  </div>
)
}