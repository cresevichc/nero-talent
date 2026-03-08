import VacancyCard from "@/app/components/VacancyCard"
export default async function PortalCliente({
  params,
  searchParams
}: {
  params: { cliente: string }
  searchParams: { token?: string }
}) {
const { cliente } = params  
const token = searchParams?.token
if (!token) {
  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Access denied</h1>
      <p>Invalid portal link.</p>
    </div>
  )
}
const sheetId = "1vLNptsuq-ZYgXLIa5WkaQLu7orvz2wQ_OCcTLbW9xZk"

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/CLIENTES?key=${process.env.google_api_key}`

const resClientes = await fetch(url)
const dataClientes = await resClientes.json()

const rowsClientes = dataClientes.values || []

const headersClientes = rowsClientes[0]
const recordsClientes = rowsClientes.slice(1)

const clientes = recordsClientes.map((row:any[]) => {
  const obj:any = {}
  headersClientes.forEach((header:string, index:number) => {
    obj[header] = row[index] || ""
  })
  return obj
})

const clienteData = clientes.find(
  (c:any) => c["Cliente ID"].toLowerCase() === cliente.toLowerCase()
)

if (!clienteData || clienteData["Token"] !== token) {
  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Access denied</h1>
      <p>Invalid portal token.</p>
    </div>
  )
}

const res = await fetch(
`https://nerotalent.com/api/vacantes?cliente=${params.cliente}`,
{ cache: "no-store" }
)

if (!res.ok) {
throw new Error("API vacantes failed")
}

const data = await res.json()
if (data.attive) {
  data.attive.sort((a:any, b:any) => {

    const [dayA, monthA, yearA] = a.dataApertura.split("/")
    const [dayB, monthB, yearB] = b.dataApertura.split("/")

    const dateA = new Date(Number(yearA), Number(monthA) - 1, Number(dayA))
    const dateB = new Date(Number(yearB), Number(monthB) - 1, Number(dayB))

   return dateB.getTime() - dateA.getTime()

  })
}
if ((!data.attive || data.attive.length === 0) && (!data.storico || data.storico.length === 0)) {
  return (
    <div style={{
maxWidth:"1100px",
margin:"0 auto",
minHeight:"70vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
textAlign:"center"
}}>
      <h1 style={{fontWeight:400}}>Client portal not available</h1>
      <p style={{opacity:0.7}}>Please contact NERO Talent for access.</p>
    </div>
  )
}
if (data.storico) {
  data.storico.sort((a:any, b:any) => {

    const [dayA, monthA, yearA] = a.dataChiusura.split("/")
    const [dayB, monthB, yearB] = b.dataChiusura.split("/")

    const dateA = new Date(Number(yearA), Number(monthA) - 1, Number(dayA))
    const dateB = new Date(Number(yearB), Number(monthB) - 1, Number(dayB))

    return dateB.getTime() - dateA.getTime()

  })
}
const activeRoles = data.attive.length

const candidatesInProcess = data.attive.reduce(
(acc:any,v:any)=>
acc +
(v.pipeline?.hr || 0) +
(v.pipeline?.tech || 0) +
(v.pipeline?.client || 0) +
(v.pipeline?.feedback || 0) +
(v.pipeline?.offer || 0)
,0)

const placements = data.attive.reduce(
(acc:any,v:any)=> acc + (v.pipeline?.hire || 0)
,0)
const pipelineHR = data.attive.reduce(
(acc:any,v:any)=> acc + (v.pipeline?.hr || 0)
,0)

const pipelineTech = data.attive.reduce(
(acc:any,v:any)=> acc + (v.pipeline?.tech || 0)
,0)

const pipelineClient = data.attive.reduce(
(acc:any,v:any)=> acc + (v.pipeline?.client || 0)
,0)

const pipelineOffer = data.attive.reduce(
(acc:any,v:any)=> acc + (v.pipeline?.offer || 0)
,0)

const pipelineHire = data.attive.reduce(
(acc:any,v:any)=> acc + (v.pipeline?.hire || 0)
,0)

return (

<div
style={{
maxWidth: "1100px",
margin: "0 auto",
padding: "80px 20px 40px 20px",
textAlign: "center"
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
marginBottom: "18px",
fontFamily: '"Playfair Display", serif'
}}
>
CLIENT PORTAL — {params.cliente.toUpperCase()}
</p>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(3,220px)",
gap: "20px",
marginTop: "30px",
marginBottom: "40px",
justifyContent: "center",
}}
>

<div
style={{
padding: "20px",
background: "#111",
border: "1px solid #222",
borderRadius: "10px"
}}
>
<h1 style={{margin:0}}>{activeRoles}</h1>
<p style={{opacity:0.7,marginTop:"10px"}}>ACTIVE ROLES</p>
</div>

<div
style={{
padding: "20px",
background: "#111",
border: "1px solid #222",
borderRadius: "10px"
}}
>
<h1 style={{margin:0}}>{candidatesInProcess}</h1>
<p style={{opacity:0.7,marginTop:"10px"}}>CANDIDATES IN PROCESS</p>
</div>

<div
style={{
padding: "20px",
background: "#111",
border: "1px solid #222",
borderRadius: "10px"
}}
>
<h1 style={{margin:0}}>{placements}</h1>
<p style={{opacity:0.7,marginTop:"10px"}}>PLACEMENTS</p>
</div>

</div>
<div
style={{
marginTop: "10px",
marginBottom: "40px",
padding: "20px",
background: "#111",
border: "1px solid #222",
borderRadius: "10px",
textAlign: "center"
}}
>

<p style={{fontSize:"13px",letterSpacing:"0.08em",opacity:0.6,marginBottom:"10px"}}>
SEARCH PIPELINE
</p>

<p style={{margin:0,fontSize:"16px",fontWeight:500,letterSpacing:"0.03em"}}>
HR <b>{pipelineHR}</b>&nbsp;&nbsp;|&nbsp;&nbsp;TECH <b>{pipelineTech}</b>&nbsp;&nbsp;|&nbsp;&nbsp;CLIENT <b>{pipelineClient}</b>&nbsp;&nbsp;|&nbsp;&nbsp;OFFER <b>{pipelineOffer}</b>&nbsp;&nbsp;|&nbsp;&nbsp;HIRE <b>{pipelineHire}</b>
</p>

</div>

<h2 style={{marginTop:"40px", marginBottom:"20px", fontSize:"24px"}}>
ACTIVE SEARCHES
</h2>
<div
style={{
height: "1px",
background: "rgba(245,247,250,0.15)",
marginBottom: "30px"
}}
></div>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(2,1fr)",
gap: "30px",
marginTop: "20px"
}}
>

{data.attive.map((v:any)=>(

<VacancyCard key={v.id} v={v}/>

))}

</div>

<h2 style={{marginTop:"40px", marginBottom:"20px", fontSize:"24px"}}>
CLOSED SEARCHES
</h2>
<div
style={{
height: "1px",
background: "rgba(245,247,250,0.15)",
marginBottom: "30px"
}}
></div>
<div
style={{
display: "grid",
gridTemplateColumns: "repeat(2,1fr)",
gap: "30px",
marginTop: "40px"
}}
>

{data.chiuseRecenti.map((v:any)=>(

<VacancyCard key={v.id} v={v}/>

))}

</div>

<div
style={{
display: "grid",
gridTemplateColumns: "1fr",
gap: "20px",
marginTop: "20px"
}}
>

{data.storico.map((v:any)=>(

<VacancyCard key={v.id} v={v}/>

))}

</div>

</div>

)

}
