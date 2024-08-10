import drink_recipes from "./drink_recipes";
import drug_recipes from "./drug_recipes";
import food_recipes from "./food_recipes";
import med_recipes from "./med_recipes";
import misc_recipes from "./misc_recipes";
import pyro_recipes from "./pyro_recipes";
import toxins_recipes from "./toxins_recipes";

export interface Recipes{
  [key: string]: Recipe
}

export interface Recipe {
  name: string,
  id: string,
  result?: string | null,
  result_amount?: number,
  required_reagents: RequiredReagents,
  required_catalysts?: RequiredReagents,
  path: string,
  min_temp?: string,
  category: string,
}

export interface RequiredReagents {
  [name: string]: number
}

const recipes: Recipes = {
  ...drink_recipes,
  ...drug_recipes,
  ...food_recipes,
  ...med_recipes,
  ...misc_recipes,
  ...pyro_recipes,
  ...toxins_recipes
};

export default recipes
