import ConfirmButton from "@/app/components/ConfirmButton"

export default async function ProposalPage({
  params
}: {
  params: { cliente: string }
}) {

  const token = params.cliente
  let nome = "Cliente"

  try {
  const res = await fetch(
    `https://nero-talent.vercel.app/api/accept-proposal`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    }
  )

  const data = await res.json()

  if (data?.nome) {
    nome = data.nome
  }

} catch (e) {}

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>

        <h1>NERO TALENT</h1>

        <p style={{ marginTop: "20px" }}>
          {nome}
        </p>

        <ConfirmButton token={token} />

      </div>
    </div>
  )
}