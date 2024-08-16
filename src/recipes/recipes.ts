import raw_recipes from './recipes.json'

export interface Recipes{
  [key: string]: Recipe
}

export interface Recipe {
  name: string,
  id: string,
  result?: string | null,
  result_amount?: number,
  required_reagents?: RequiredReagents,
  required_catalysts?: RequiredReagents,
  path?: string,
  min_temp?: number,
  category?: string,
}

export interface RequiredReagents {
  [name: string]: number
}

const recipes: Recipes = raw_recipes;

export default recipes
