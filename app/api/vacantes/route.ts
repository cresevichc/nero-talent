export const runtime = "nodejs";
export const revalidate = 60;
export async function GET(request: Request) {

  const sheetId = "1vLNptsuq-ZYgXLIa5WkaQLu7orvz2wQ_OCcTLbW9xZk";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/VACANTES?key=${process.env.google_api_key}`;

  const res = await fetch(url);
  const data = await res.json();

  const rows = data.values || [];

  if (rows.length === 0) {
    return Response.json({ attive: [], chiuseRecenti: [] });
  }

  // limpiar headers (quitar saltos de línea)
  const headers = rows[0].map((h: string) =>
    h.replace(/\n/g, " ").replace(/\s+/g, " ").trim()
  );

  const records = rows.slice(1);

  const vacantes = records.map((row: any[]) => {
    const obj: any = {};

    headers.forEach((header: string, index: number) => {
      obj[header] = row[index] || "";
    });

    return obj;
  });
  const vacantesPortal = vacantes.map((v: any) => ({

  id: v["ID Posizione"],
  cliente: v["Cliente"],
  ruolo: v["Ruolo"],
  seniority: v["Seniority"],

  posizioniRichieste: v["Posizioni Richieste"],

  statoPosizione: v["Stato Posizione"],
  statoAvanzamento: v["Stato di avanzamento"],

  dataApertura: v["Data Apertura"],
  giorniApertura: v["Giorni Apertura"],

  primaPresentazione: v["Data prima presentazione"],
  giorniPrimaPresentazione: v["Giorni prima presentazione"],

  dataChiusura: v["Data Chiusura"],

  candidatiTotali: Number(v["Candidati Totali"] || 0),
  candidatiPresentati: Number(v["Candidati Presentati"] || 0),
  candidatiNonPresentati: Number(v["Candidati non Presentati"] || 0),

  pipeline: {
    hr: Number(v["Colloqui HR"] || 0),
    tech: Number(v["Colloqui Tecnici"] || 0),
    client: Number(v["Colloqui Cliente"] || 0),
    feedback: Number(v["In Attesa di Feedback"] || 0),
    offer: Number(v["Offerte Attive"] || 0),
    hire: Number(v["Candidati Assunti"] || 0)
  },

  scarti: {
    budget: Number(v["Fuori Budget"] || 0),
    stack: Number(v["Stack non Allineato"] || 0),
    seniority: Number(v["Seniorità non Adeguata"] || 0),
    notInterested: Number(v["Non interessato"] || 0),
    notAvailable: Number(v["Non Disponibile"] || 0),
    altro: Number(v["Altro"] || 0)
  }

}));

  const cliente = new URL(request.url).searchParams.get("cliente");

  const vacantesFiltradas = cliente
  ? vacantesPortal.filter(
      (v: any) =>
        (v.cliente || "").toLowerCase() === cliente.toLowerCase()
    )
  : vacantesPortal;

  const oggi = new Date();

  const attive = vacantesFiltradas.filter(
  (v: any) => v.statoPosizione === "Aperta"
);

  const chiuseRecenti = vacantesFiltradas.filter((v: any) => {

    if (v.statoPosizione !== "Chiusa") return false;

    const dataChiusura = v.dataChiusura;
    if (!dataChiusura) return false;

    const [giorno, mese, anno] = dataChiusura.split("/");

    const chiusura = new Date(`${anno}-${mese}-${giorno}`);

    const diff =
      (oggi.getTime() - chiusura.getTime()) /
      (1000 * 60 * 60 * 24);

    return diff <= 7;
  });
const storico = vacantesFiltradas.filter((v: any) => {

if (v.statoPosizione !== "Chiusa") return false;

const dataChiusura = v.dataChiusura;
if (!dataChiusura) return false;

const [giorno, mese, anno] = dataChiusura.split("/");

const chiusura = new Date(`${anno}-${mese}-${giorno}`);

const diff =
  (oggi.getTime() - chiusura.getTime()) /
  (1000 * 60 * 60 * 24);

return diff > 7;

});
  return Response.json({
attive,
chiuseRecenti,
storico
});

}