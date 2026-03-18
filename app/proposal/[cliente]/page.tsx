'use client'
import ConfirmButton from "@/app/components/ConfirmButton"

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
          borderRadius: "12px"
        }}
      >

        <h1 className="nero-title" style={{
          fontSize: "40px",
          fontWeight: 500,
          letterSpacing: "0.04em",
          marginBottom: "6px",
          fontFamily: '"Playfair Display", serif',
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

        {/* 🔴 NOMBRE CLIENTE (mañana lo conectamos bien) */}
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
            dedicato, attraverso il quale sarà possibile monitorare lo stato della ricerca,
            visualizzare i candidati presentati e seguire l’evoluzione del processo in tempo reale.
          </p>

          <h3 style={{ marginTop: "30px" }}>Compenso</h3>

          <p>
            Il compenso per l’attività di ricerca e selezione è pari al <b>20% della Retribuzione
            Annua Lorda (RAL)</b>.
          </p>

          <p>
            In caso di pagamento entro <b>7 giorni</b>, il compenso sarà pari al <b>17% della RAL</b>.
          </p>

          <h3 style={{ marginTop: "30px" }}>Garanzia</h3>

          <p>
            NERO Talent offre una <b>garanzia di sostituzione di 90 giorni</b>.
          </p>

          <p>
            Qualora il rapporto si interrompa, la ricerca verrà riattivata senza costi aggiuntivi.
          </p>

          <h3 style={{ marginTop: "30px" }}>Tutela della Presentazione</h3>

          <p>
            Se il candidato viene assunto entro <b>12 mesi</b>, il compenso sarà comunque dovuto.
          </p>

          <h3 style={{ marginTop: "30px" }}>Validità della Proposta</h3>

          <p>
            La proposta ha validità di <b>30 giorni</b>.
          </p>

          <h3 style={{ marginTop: "30px" }}>Chiusura</h3>

          <p>
            Le condizioni complete saranno regolate dal contratto di incarico.
          </p>

        </div>

        <div style={{ marginTop: "40px", textAlign: "left" }}>
          <p style={{ opacity: 0.7 }}>NERO Talent</p>
          <p>Cristian Cresevich</p>
          <p>Founder</p>
        </div>

        <ConfirmButton token={token} key={token} />

      </div>
    </div>
  )
}