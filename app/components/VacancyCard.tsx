export default function VacancyCard({ v }: { v: any }) {
const isClosed = v.statoPosizione === "Chiusa"
return (

<div
style={{
marginTop: "30px",
marginBottom: "30px",
padding: "20px",
borderRadius: "10px",
background: "#0D0D0F",
border: "1px solid rgba(255,255,255,0.05)",
color: "#F5F7FA",
display: isClosed ? "grid" : "flex",
flexDirection: isClosed ? "row" : "column",
textAlign: "left",
gridTemplateColumns: isClosed ? "1.2fr 1.2fr 1fr 1.2fr 1fr" : "none",
gap: isClosed ? "30px" : "0"
}}
>
<div>

<p style={{fontSize:"14px",letterSpacing:"0.08em"}}>
{v.id}
</p>

<p style={{fontSize:"20px",fontWeight:"500",marginTop:"6px"}}>
{v.ruolo}
<br/>
{v.seniority}
</p>

<p style={{opacity:0.7,marginTop:"4px"}}>
Status: {v.statoPosizione}
</p>

</div>

<div
style={{
display: isClosed ? "contents" : "grid",
gridTemplateColumns: isClosed ? "none" : "1fr 1fr",
gap: "40px",
alignItems: "start"
}}
>


<div>

<div style={{minWidth:"260px"}}>

<p
style={{
fontSize: "12px",
letterSpacing: "0.12em",
opacity: 0.6,
marginTop: isClosed ? "0px" : "18px",
marginBottom: "10px"
}}
>
TIMELINE
</p>

<p>Open date: {v.dataApertura}</p>

<p>Days open: {v.giorniApertura}</p>

<p><span style={{whiteSpace:"nowrap"}}>First presentation:</span> {v.primaPresentazione}</p>

<p>Days to first candidate: {v.giorniPrimaPresentazione}</p>

<p>Closing date: {v.dataChiusura}</p>

</div>

</div>


<div>

<p
style={{
fontSize: "12px",
letterSpacing: "0.12em",
opacity: 0.6,
marginTop: isClosed ? "0px" : "18px",
marginBottom: "10px"
}}
>
PIPELINE
</p>

<p>HR: {v.pipeline.hr}</p>

<p>Tech: {v.pipeline.tech}</p>

<p>Client: {v.pipeline.client}</p>

<p><span style={{whiteSpace:"nowrap"}}>Client feedback:</span> {v.pipeline.feedback}</p>

<p>Offer: {v.pipeline.offer}</p>

<p>Hire: {v.pipeline.hire}</p>

</div>


<div>

<p
style={{
fontSize: "12px",
letterSpacing: "0.12em",
opacity: 0.6,
marginBottom: "10px"
}}
>
CANDIDATES
</p>

<p>Total: {v.candidatiTotali}</p>

<p>Presented: {v.candidatiPresentati}</p>

<p>Not presented: {v.candidatiNonPresentati}</p>

</div>


<div>

<p
style={{
fontSize: "12px",
letterSpacing: "0.12em",
opacity: 0.6,
marginBottom: "10px"
}}
>
REJECTIONS
</p>

<p>Budget: {v.scarti.budget}</p>

<p>Stack: {v.scarti.stack}</p>

<p>Seniority: {v.scarti.seniority}</p>

<p>Not interested: {v.scarti.notInterested}</p>

<p>Not available: {v.scarti.notAvailable}</p>

<p>Other: {v.scarti.altro}</p>

</div>


</div>

</div>

)

}