import ConfirmButton from "@/app/components/ConfirmButton"

export default async function ProposalPage({
  params
}: {
  params: { cliente: string }
}) {

  const token = params.cliente

  const res = await fetch(
  `https://nero-talent.vercel.app/api/get-proposal?token=${token}`,
  { cache: "no-store" }
)

  const clienteData = await res.json()

  if (!clienteData || !clienteData.success) {
    return (
      <div style={{ background: "#000", minHeight: "100vh", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginTop: "100px", color: "#fff" }}>
          <h1>Proposal not available</h1>
          <p>Invalid proposal link.</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

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
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset"
        }}
      >

        <h1
          style={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: "0.04em",
            marginBottom: "6px",
            fontFamily: '"Playfair Display", serif'
          }}
        >
          NERO TALENT
        </h1>

        <p
          style={{
            fontSize: "14px",
            letterSpacing: "0.08em",
            opacity: 0.75,
            marginBottom: "40px",
            fontFamily: '"Playfair Display", serif'
          }}
        >
          SEARCH ENGAGEMENT
        </p>

        <p
          style={{
            fontSize: "20px",
            fontWeight: 500,
            marginTop: "20px"
          }}
        >
          {clienteData.nome || "Client"}
        </p>

        <div
          style={{
            marginTop: "40px",
            padding: "30px",
            background: "#111",
            border: "1px solid #222",
            borderRadius: "10px",
            textAlign: "left",
            lineHeight: "1.6"
          }}
        >

          <p>
            La presente ha lo scopo di formalizzare la proposta di collaborazione di NERO Talent
            per l’attività di ricerca e selezione.
          </p>

          <h3 style={{ marginTop: "30px" }}>Ambito del Servizio</h3>

          <p>
            NERO Talent supporta le aziende tecnologiche nell’identificazione, valutazione e
            presentazione di candidati qualificati per ruoli strategici.
          </p>

          <p>L’attività comprende:</p>

          <p>
            – definizione e allineamento del profilo ricercato<br />
            – identificazione e valutazione dei candidati<br />
            – presentazione di una shortlist qualificata<br />
            – supporto durante l’intero processo di selezione fino alla chiusura
          </p>

          <h3 style={{ marginTop: "30px" }}>Compenso</h3>

          <p>
            Il compenso è pari al <b>20% della RAL</b>.
          </p>

          <h3 style={{ marginTop: "30px" }}>Garanzia</h3>

          <p>
            Garanzia di sostituzione di <b>90 giorni</b>.
          </p>

        </div>

        <div style={{ marginTop: "40px", textAlign: "left" }}>
          <p style={{ opacity: 0.7 }}>NERO Talent</p>
          <p>Cristian Cresevich</p>
          <p>Founder</p>
        </div>

        <ConfirmButton token={token} />

      </div>
    </div>
  )
}