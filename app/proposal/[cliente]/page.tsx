import ConfirmButton from "@/app/components/ConfirmButton"
export default async function ProposalPage({
  params,
  searchParams
}: {
  params: { cliente: string }
  searchParams: { token?: string }
}) {

  const { cliente } = params
  const token = params.cliente

  const sheetId = "14319GonzQ8GupZ6VdYxrDZSJW8ikrRdiv9o1Cp1NeYE"

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/ACTIVE%20HIRING!A:Z?key=${process.env.GOOGLE_API_KEY}`

const res = await fetch(url, { cache: "no-store" })
const data = await res.json()

const rows = data?.values || []

if (!rows.length) {
  return (
    <div style={{color:"white",padding:"40px"}}>
      ERROR: No data from Google Sheets
    </div>
  )
}
console.log(data)
const headers = (rows[0] || []).map((h:string) =>
  h.replace(/\n/g," ").replace(/\s+/g," ").trim()
)
console.log("HEADERS:", headers)
const records = rows.slice(1)

const clients = records.map((row:any[]) => {
  const obj:any = {}
  headers.forEach((header:string, index:number) => {
    obj[header] = row[index] || ""
  })
  return obj
})

console.log("TOKEN:", token)
console.log("CLIENTS:", clients)
const clienteData = clients.find(
  (c: any) => Object.values(c).some(
  (v) => (v || "").toString().trim() === (token || "").trim()
)
)
if (!clienteData) {
 return (
  <div style={{ background: "#000", minHeight: "100vh", padding: "40px 0" }}>

    <div style={{textAlign:"center",marginTop:"100px"}}>
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
{clienteData[0]}
</p>
<div
style={{
marginTop:"40px",
padding:"30px",
background:"#111",
border:"1px solid #222",
borderRadius:"10px",
textAlign:"left",
lineHeight:"1.6"
}}
>

<p>
La presente ha lo scopo di formalizzare la proposta di collaborazione di NERO Talent
per l’attività di ricerca e selezione.
</p>

<h3 style={{marginTop:"30px"}}>Ambito del Servizio</h3>

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

<p style={{marginTop:"20px"}}>
Durante il processo, il Cliente avrà inoltre accesso a un <b>NERO Client Portal</b>
{" "} dedicato, attraverso il quale sarà possibile monitorare lo stato della ricerca,
visualizzare i candidati presentati e seguire l’evoluzione del processo in tempo reale.
</p>

<h3 style={{marginTop:"30px"}}>Compenso</h3>

<p>
Il compenso per l’attività di ricerca e selezione è pari al <b>20% della Retribuzione
Annua Lorda (RAL)</b> prevista nel contratto di assunzione del candidato selezionato.
</p>

<p>
In caso di pagamento entro <b>7 giorni</b> dalla data di ingresso del candidato,
il compenso applicabile sarà pari al <b>17% della RAL</b>.
</p>

<h3 style={{marginTop:"30px"}}>Garanzia</h3>

<p>
NERO Talent offre una <b>garanzia di sostituzione di 90 giorni</b> a partire dalla data
di ingresso del candidato selezionato.
</p>

<p>
Qualora, entro tale periodo, il rapporto di lavoro si interrompa per dimissioni
volontarie del candidato o per mancato allineamento professionale, NERO Talent
riattiverà l’attività di ricerca per la medesima posizione senza ulteriori onorari.
</p>

<p>
La garanzia è subordinata al rispetto delle condizioni di collaborazione previste.
</p>

<h3 style={{marginTop:"30px"}}>Tutela della Presentazione</h3>

<p>
Qualora il Cliente o società collegate assumano un candidato presentato da NERO Talent
entro <b>12 mesi</b> dalla presentazione, sarà comunque dovuto il compenso previsto.
</p>

<h3 style={{marginTop:"30px"}}>Validità della Proposta</h3>

<p>
La presente offerta ha una validità di <b>30 giorni</b> dalla data di ricezione della
stessa. Decorso tale termine, le condizioni economiche e operative potranno essere
soggette a revisione.
</p>

<h3 style={{marginTop:"30px"}}>Chiusura</h3>

<p>
Le condizioni complete della collaborazione saranno regolate dal contratto di incarico.
</p>

</div>
<div style={{marginTop:"40px", textAlign:"left"}}>

  <div style={{marginTop:"30px"}}>
    <p style={{opacity:0.7}}>NERO Talent</p>
    <p>Cristian Cresevich</p>
    <p>Founder</p>
  </div>

</div>
<ConfirmButton token={token || ""} />
</div>
</div>

)
}