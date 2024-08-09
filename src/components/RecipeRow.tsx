import { Recipe } from "../recipes/recipes"
import ReagentCard from "./ReagentCard"

function RecipeRow({ recipe } : { recipe: Recipe}) {

  return <>
    <tr>
      <td><ReagentCard reagent={{name: recipe.name, amount: Number(recipe.result_amount)}}/></td>
      <td className="d-flex flex-wrap">{Object.keys(recipe.required_reagents).map(reagent_name => <>
        <ReagentCard reagent={{name: reagent_name, amount: recipe.required_reagents[reagent_name]}} />
      </>)}</td>
    </tr>
  </>
}

export default RecipeRow
