import React, { createContext, useContext, useState, ReactNode } from "react";

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

interface RecipeContextType {
  selectedRecipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: string) => void;
  clearRecipes: () => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);

  const addRecipe = (recipe: Recipe) => {
    setSelectedRecipes((prev) => [...prev, recipe]);
  };

  const removeRecipe = (id: string) => {
    setSelectedRecipes((prev) => prev.filter((recipe) => recipe.idMeal !== id));
  };

  const clearRecipes = () => setSelectedRecipes([]);

  return (
    <RecipeContext.Provider value={{ selectedRecipes, addRecipe, removeRecipe, clearRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};
