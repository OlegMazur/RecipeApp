import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipesPage } from './pages/RecipesPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
