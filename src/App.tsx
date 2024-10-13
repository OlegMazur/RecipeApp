import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetail from "./pages/RecipeDetail";
import SelectedRecipes from "./pages/SelectedRecipes";

function App() {
  return (
    <Router basename="/RecipeApp">
      
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipe/selected" element={<SelectedRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
