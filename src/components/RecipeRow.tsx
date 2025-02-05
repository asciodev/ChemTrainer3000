import reagents from "../reagents"
import { Recipe } from "../recipes/recipes"
import CatalystCard from "./CatalystCard";
import ReagentCard from "./ReagentCard"
import TemperatureCard from "./TemperatureCard";

function RecipeRow({ recipe } : { recipe: Recipe}) {

  const reagent = reagents.find((reagent) => !!reagent && reagent.id === recipe.result) || {name: recipe.name, id: "0"};
  return reagent && <tr>
      <td>{!!reagent && <ReagentCard input={{reagent: reagent, amount: recipe.result_amount || 0, category: recipe.category}}/>}</td>
       <td className="d-flex flex-wrap">
        {
          Object.keys(recipe.required_reagents || []).map(function(reagent_id){
            const ingredient = reagents.find((reagent) => reagent.id === reagent_id);
            return <div key={reagent_id}>
              <ReagentCard input={{reagent: ingredient || {name: reagent_id, id: reagent_id}, amount: recipe.required_reagents ? recipe.required_reagents[reagent_id] : 0}} />
            </div>
          })
        }{
          !!recipe.required_catalysts && Object.keys(recipe.required_catalysts).map(function(reagent_id){
            const catalyst = reagents.find((reagent) => reagent.id === reagent_id);
            return <div key={reagent_id}>
              <CatalystCard input={{reagent: catalyst || {name: reagent_id, id: reagent_id}, amount: recipe.required_catalysts ? recipe.required_catalysts[reagent_id] : 0 }} />
            </div>
          })
        }{
          !!recipe.min_temp && <TemperatureCard min_temp={Math.round(recipe.min_temp * 100) / 100} />
        }
      </td>
    </tr>
}

export default RecipeRow
