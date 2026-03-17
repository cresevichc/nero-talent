import ConfirmButton from "@/app/components/ConfirmButton"

export default function ProposalPage({
  params
}: {
  params: { cliente: string }
}) {

  const token = params.cliente

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>

        <h1>NERO TALENT</h1>

        <p style={{ marginTop: "20px" }}>
          Proposal
        </p>

        <ConfirmButton token={token} />

      </div>
    </div>
  )
}