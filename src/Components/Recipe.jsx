import React, { useState, useEffect } from 'react';
import AddRecipe from './Components/AddRecipe';
export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  // Hardcoded URL for the Heroku backend
  const API_URL = 'https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com';

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        console.time('getrecipes-query');
        const response = await fetch(`${API_URL}/api/getrecipes`);
        //console.timeEnd('getrecipes-query');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <div>
        <AddRecipe />
        <h1>This is the front end app</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h2>{recipe.recipe_name}</h2>
              <p>Creator: {recipe.creator}</p>
              <p>Category: {recipe.category}</p>
              <p>Cuisine: {recipe.cuisine}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}