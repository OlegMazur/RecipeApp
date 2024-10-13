import { Link } from "react-router-dom";
export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  [key: string]: string | null;
}

type RecipeCardProps = {
  addRecipe: (recipe: Recipe) => void;
  recipe: Recipe;
};

const RecipeCard = ({ recipe, addRecipe }: RecipeCardProps) => {
  return (
    <div className="card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p>
        {recipe.strCategory} - {recipe.strArea}
      </p>
      <button onClick={() => addRecipe(recipe)}>Add to Selected</button>
      <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link>
    </div>
  );
};

export default RecipeCard;
