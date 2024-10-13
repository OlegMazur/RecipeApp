import { useQuery } from '@tanstack/react-query';
    import { searchMeals } from '../api/mealsApi';
    import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
    
    
    const RecipesPage = () => {
      const [searchQuery, setSearchQuery] = useState('');
      const {  isPending, error, data:meals } = useQuery({queryKey:['meals',searchQuery], queryFn:() =>
        searchMeals(searchQuery)
    });
    
      if (isPending) return <p>Loading...</p>;
      if (!meals) return <p>No meals found</p>;
    
      return (
        <div>
          
          <div className="recipe-grid">
            {meals.map((meal:any) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
          
        </div>
      );
    };
    
    export default RecipesPage;
    