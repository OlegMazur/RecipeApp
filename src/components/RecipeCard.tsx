import { Link } from 'react-router-dom';

type RecipeCardProps = {
  meal: {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
  };
};

const RecipeCard = ({ meal }: RecipeCardProps) =>{ 
    console.log(meal)
    return(
  <div className="card">
    <img src={meal.strMealThumb} alt={meal.strMeal} />
    <h3>{meal.strMeal}</h3>
    <p>{meal.strCategory} - {meal.strArea}</p>
    
    <Link to={`/recipe/${meal.idMeal}`}>View Details</Link>
  </div>)
};

export default RecipeCard;
