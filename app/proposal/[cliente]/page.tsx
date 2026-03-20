'use client'
import { useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"]
});

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

      <div id="proposal-document"
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
          <h1
            className={playfair.className}
            style={{
              fontSize: "42px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              marginBottom: "6px"
            }}
          >
            NERO TALENT
          </h1>

          <p style={{
            fontSize: "11px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: "30px"
          }}>
            SEARCH ENGAGEMENT
          </p>

          <p
            className={playfair.className}
            style={{
              fontSize: "22px",
              fontWeight: 500,
              letterSpacing: "0.02em",
              marginTop: "10px"
            }}
          >
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
            marginTop: "30px",
            alignItems: "flex-end"
          }}>

            {/* NERO */}
            <div>
              <p
                className={playfair.className}
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  marginBottom: "6px"
                }}
              >
                NERO TALENT
              </p>

              <p style={{ fontSize: "14px", marginBottom: "2px" }}>
                Cristian Cresevich
              </p>

              <p style={{ fontSize: "13px", opacity: 0.7 }}>
                Founder
              </p>
            </div>

            {/* CLIENTE */}
            <div style={{ textAlign: "left" }}>
              <div id="client-signature" style={{ textAlign: "left" }} />
            </div>

        </div>
        </div>
        
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <ConfirmButton token={token} />
      </div>

    </div>
  )
}