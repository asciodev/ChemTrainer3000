import recipes, { Recipe } from "../recipes/recipes"
import ReagentCard from "./ReagentCard"

function RecipeRow({ recipe } : { recipe: Recipe}) {

  return <>
    <tr>
      <td><ReagentCard reagent={{name: recipe.name, amount: Number(recipe.result_amount)}}/></td>
      <td className="d-flex flex-wrap">{Object.keys(recipe.required_reagents).map(reagent_id => <>
        <ReagentCard reagent={{name: recipes[reagent_id]?.name || reagent_id, amount: recipe.required_reagents[reagent_id]}} />
      </>)}{!!recipe.min_temp && <ReagentCard reagent={{name: "Temperature", amount: recipe.min_temp}} />}</td>
    </tr>
  </>
}

export default RecipeRow
