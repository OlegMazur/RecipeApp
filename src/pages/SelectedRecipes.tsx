import React from "react";
import { useRecipeContext } from "./../context/RecipeContext";

const SelectedRecipes: React.FC = () => {
  const { selectedRecipes, removeRecipe, clearRecipes } = useRecipeContext();
  const combinedIngredients = selectedRecipes.reduce((acc, recipe) => {
    Array.from({ length: 20 }).forEach((_, i) => {
      const ingredient = recipe[`strIngredient${i + 1}`];
      const measure = recipe[`strMeasure${i + 1}`];

      if (ingredient) {
        acc.push(`${measure} ${ingredient}`);
      }
    });
    return acc;
  }, [] as string[]);

  return (
    <div>
      <h1>Selected Recipes</h1>

      <button onClick={clearRecipes}>Clear All</button>
      {selectedRecipes.map((recipe) => (
        <div key={recipe.idMeal} style={{ margin: "10px 0" }}>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <button onClick={() => removeRecipe(recipe.idMeal)}>Remove</button>
        </div>
      ))}
      <h3>Combined Ingredients:</h3>
      <ul>
        {combinedIngredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedRecipes;
