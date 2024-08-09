interface reagent {
  name: string,
  id: string,
}

interface ReagentCardInput {
  reagent: reagent,
  amount: number | string
}

function ReagentCard({ input } : { input: ReagentCardInput}) {
  return <div className="reagent card">
      <span>{input.reagent.name}</span>
      <hr/>
      <span className="number">{input.amount}</span>
    </div>
}

export default ReagentCard
