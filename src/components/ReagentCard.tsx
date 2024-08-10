export interface reagent {
  name: string,
  id: string,
}

export interface ReagentCardInput {
  reagent: reagent,
  amount: number | string,
  category?: string
}

function ReagentCard({ input } : { input: ReagentCardInput}) {
  return <div className="reagent card">
      <span className="name"><ruby>{input.reagent.name}<rp>(</rp><rt>{input.category && ["[",input.category,"]"].join("")}</rt><rp>)</rp></ruby></span>
      <hr/>
      <span className="number">{input.amount}</span>
    </div>
}

export default ReagentCard
