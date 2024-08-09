import reagents from "../reagents"
import { Recipe } from "../recipes/recipes"
import ReagentCard from "./ReagentCard"

function RecipeRow({ recipe } : { recipe: Recipe}) {

  const reagent = reagents.find((reagent) => !!reagent && reagent.id === recipe.result) || {name: recipe.name, id: "0"};
  return reagent && <tr>
      <td>{!!reagent && <ReagentCard input={{reagent: reagent, amount: recipe.result_amount || 0}}/>}</td>
       <td className="d-flex flex-wrap">
        {Object.keys(recipe.required_reagents).map(function(reagent_id){
          const ingredient = reagents.find((reagent) => reagent.id === reagent_id);
          return <div key={reagent_id}>
            {ingredient && <ReagentCard input={{reagent: ingredient, amount: recipe.required_reagents[reagent_id]}} /> }
          </div>
        })}{!!recipe.min_temp && <ReagentCard input={{reagent: {name: "Temperature", id: "min_temp"}, amount: recipe.min_temp}} />}
      </td>
    </tr>
}

export default RecipeRow
