import { useQuery } from "@tanstack/react-query";
import { searchMeals } from "../api/mealsApi";
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    isPending,
    error,
    data: meals,
  } = useQuery({ queryKey: ["meals", searchQuery], queryFn: () => searchMeals(searchQuery) });

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = meals.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = meals.slice(indexOfFirstItem, indexOfLastItem);
  if (isPending) return <p>Loading...</p>;
  if (!meals) return <p>No meals found</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="recipe-grid">
        {currentRecipes.map((meal: any) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
      <Pagination totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}/>

       
    </div>
    
  );
};

export default RecipesPage;
