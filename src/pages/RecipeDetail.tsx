import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMealById } from '../api/mealsApi';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  [key: string]: string | null; // Динамічний доступ до інгредієнтів
}



const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Отримання ID з URL
  const { data: recipe, isLoading, error } = useQuery<Recipe>({
    queryKey:['recipe', id],
    queryFn:() => getMealById(id!)
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  // Отримання інгредієнтів і їхніх кількостей
  const ingredients = Array.from({ length: 20 })
    .map((_, i) => ({
      ingredient: recipe[`strIngredient${i + 1}`],
      measure: recipe[`strMeasure${i + 1}`],
    }))
    .filter((item) => item.ingredient);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />
      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>
      <p>
        <strong>Area:</strong> {recipe.strArea}
      </p>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.measure} {item.ingredient}
          </li>
        ))}
      </ul>

      {recipe.strYoutube && (
        <div>
          <h3>Watch on YouTube</h3>
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
            {recipe.strYoutube}
          </a>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
