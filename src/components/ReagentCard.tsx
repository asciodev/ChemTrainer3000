interface reagent {
  name: string,
  amount: number
}

function ReagentCard({ reagent } : { reagent: reagent }) {
  return <>
    <div className='reagent card'>
      <span>{reagent.name}</span>
      <hr/>
      <span>{reagent.amount}</span>
    </div>
  </>
}

export default ReagentCard
