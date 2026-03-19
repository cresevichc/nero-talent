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
          maxWidth: "900px",
          margin: "0 auto",
          padding: "100px 40px",
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
  fontSize: "42px",
  fontWeight: 500,
  letterSpacing: "0.06em",
  marginBottom: "10px"
}}>
  NERO TALENT
</h1>

<p style={{
  fontSize: "11px",
  letterSpacing: "0.22em",
  opacity: 0.5,
  marginBottom: "60px",
  textTransform: "uppercase"
}}>
  Search Engagement
</p>

<p style={{
  fontSize: "36px",
  marginBottom: "80px",
  fontWeight: 500,
  letterSpacing: "0.01em"
}}>
  {cliente ? cliente : ""}
</p>

        <div style={{
  textAlign: "left",
  lineHeight: "1.8",
  maxWidth: "640px",
  margin: "0 auto",
  marginTop: "40px",
  fontSize: "15px",
  opacity: 0.9
}}>

          <p>
La presente ha lo scopo di formalizzare la proposta di collaborazione di NERO Talent
per l’attività di ricerca e selezione.
</p>

<h3 style={{
  marginTop: "50px",
  marginBottom: "10px",
  fontSize: "14px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  opacity: 0.6
}}></h3>

<p>
NERO Talent supporta le aziende tecnologiche nell’identificazione, valutazione e
presentazione di candidati qualificati per ruoli strategici.
</p>

<p>L’attività comprende:</p>

<p>
– definizione e allineamento del profilo ricercato<br/>
– identificazione e valutazione dei candidati<br/>
– presentazione di una shortlist qualificata<br/>
– supporto durante l’intero processo di selezione fino alla chiusura
</p>

<p style={{ marginTop: "20px", marginBottom: "14px" }}>
Durante il processo, il Cliente avrà inoltre accesso a un <b>NERO Client Portal</b>
dedicato, attraverso il quale sarà possibile monitorare lo stato della ricerca,
visualizzare i candidati presentati e seguire l’evoluzione del processo in tempo reale.
</p>

<h3 style={{
  marginTop: "50px",
  marginBottom: "10px",
  fontSize: "14px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  opacity: 0.6
}}></h3>

<p>
Il compenso per l’attività di ricerca e selezione è pari al <b>20% della RAL</b>.
</p>

<p>
In caso di pagamento entro <b>7 giorni</b>, il compenso sarà pari al <b>17% della RAL</b>.
</p>

<h3 style={{
  marginTop: "50px",
  marginBottom: "10px",
  fontSize: "14px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  opacity: 0.6
}}></h3>

<p>
NERO Talent offre una <b>garanzia di sostituzione di 90 giorni</b>.
</p>

<p>
Qualora il rapporto si interrompa, la ricerca verrà riattivata senza costi aggiuntivi.
</p>

<h3 style={{
  marginTop: "50px",
  marginBottom: "10px",
  fontSize: "14px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  opacity: 0.6
}}></h3>

<p>
Se il candidato viene assunto entro <b>12 mesi</b>, il compenso sarà comunque dovuto.
</p>

<h3 style={{
  marginTop: "50px",
  marginBottom: "10px",
  fontSize: "14px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  opacity: 0.6
}}></h3>

<p>
La proposta ha validità di <b>30 giorni</b>.
</p>

<h3 style={{
  marginTop: "50px",
  marginBottom: "10px",
  fontSize: "14px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  opacity: 0.6
}}></h3>

<p>
Le condizioni complete saranno regolate dal contratto di incarico.
</p>

        </div>

        <div style={{
  marginTop: "100px",
  textAlign: "left",
  maxWidth: "640px",
  marginLeft: "auto",
  marginRight: "auto"
}}>
  <p style={{
    fontSize: "12px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    opacity: 0.5,
    marginBottom: "20px"
  }}>
    NERO Talent
  </p>

  <p style={{
    fontSize: "18px",
    marginBottom: "4px"
  }}>
    Cristian Cresevich
  </p>

  <p style={{
    fontSize: "14px",
    opacity: 0.7
  }}>
    Founder
  </p>
</div>
       </div> {/* cierre proposal-document */}
      

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <ConfirmButton token={token} />
      </div>

    </div>
  )
}