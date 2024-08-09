import recipes from "../recipes/recipes"

interface reagent {
  name: string,
  amount: number | string
}

function ReagentCard({ reagent } : { reagent: reagent }) {
  let bg = "";
  if(recipes[reagent.name] !== undefined) {
    const category = recipes[reagent.name].category;
    switch (category) {
      case "med":
        bg = "text-bg-info";
        break;
      default:
        break;
    }
  }
  return <>
    <div className={["reagent card", bg].join(" ")}>
      <span>{reagent.name}</span>
      <hr/>
      {bg}
      <span>{reagent.amount}</span>
    </div>
  </>
}

export default ReagentCard
