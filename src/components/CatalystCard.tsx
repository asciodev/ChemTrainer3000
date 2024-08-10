import { ReagentCardInput } from "./ReagentCard"

function CatalystCard({ input } : { input: ReagentCardInput}) {
  return <div className="catalyst reagent card">
      <span className="name">Catalyst: {input.reagent.name}</span>
      <hr/>
      <span className="number">{input.amount}</span>
    </div>
}

export default CatalystCard
