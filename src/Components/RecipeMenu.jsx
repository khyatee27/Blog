/*import React, { useState } from 'react'
import axios from 'axios';
import RecipePage from './RecipePage';
import './RecipeMenu.css';
function RecipeMenu() {

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');

    const fetchRecipes = async () => {
        try {
            console.log("recipe request initiated");
            const response = await fetch(`https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipes`);
            console.log(response.data);

            const data = await response.json();
            setRecipes(data);


        } catch (error) {
            console.error('Error fetching recipes:', error);
            setError(error.message);
        }
    };

    return (
        <div >
            Welcome to Recipe page!
            <button id="btnrecipe" onClick={fetchRecipes} >Get recipes</button>
            <div className="recipe_container">
                {recipes.map((recipe, index) => (
                    <div className='recipe_card' key={index}>
                        <h3>{recipe.recipe_name}</h3>
                        <div className='image'>
                            <img className='img_foodcard' src='/images/food2.png' alt="image" />
                        </div>
                        <p>Creator: {recipe.creator}</p>
                        <button id="btn_view" onClick={<RecipePage />}>View </button>

                        <p>Category: {recipe.category}</p>
                        <p>Cuisine: {recipe.cuisine}</p>
                    </div>
                ))
                }
            </div>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div >
    )
}
export default RecipeMenu*/
//new expermietn here

// latest that works
/*import React, { useState } from 'react';
import './RecipeMenu.css';
import axios from 'axios';
import dinner from '/images/dinner.png';
import breakfast from '/images/bf.png';
import lunch from '/images/lunch.png';
import kids from '/images/kids.png';
import popular from '/images/popular.png';
import dessert from '/images/image.png';
import all from '/images/all1.png';

import MiddleContent from './MiddleContent';

function RecipeMenu() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const fetchRecipes = async (category) => {
        try {
            console.log("fetch called");
            console.log(category)

            if (category == "All") {
                const response = await fetch(`https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipes`);
                if (response.ok) {
                    const data = await response.json();
                    setRecipes(data);
                    setError('');
                    console.log("Recipes for", category, ":", data);
                } else {
                    const errorMessage = await response.text();
                    setError(errorMessage);
                    setRecipes([]);
                }
            }
            else {
                const response = await fetch(`https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipes/category?category=${category}`);
                if (response.ok) {
                    const data = await response.json();
                    setRecipes(data);
                    setError('');
                    console.log("Recipes for", category, ":", data);
                } else {
                    const errorMessage = await response.text();
                    setError(errorMessage);
                    setRecipes([]);
                }
            }


            setSelectedCategory(category); // Set the selected category
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setError('Failed to fetch recipes. Please try again later.');
            setRecipes([]);
        }
    };

    const handleLinkClick = async (category) => {
        fetchRecipes(category);
    };

    return (
        <div className='main_recipemenu'>
            <div className='top-section'>
                <div className='circle-links'>

                    <div className="circle-link" onClick={() => handleLinkClick('All')}>
                        <img src={all} alt="All" />
                        <span>All</span>
                    </div>
                    <div className="circle-link" onClick={() => handleLinkClick('Dinner')}>
                        <img src={dinner} alt="Dinner" />
                        <span>Dinner</span>
                    </div>
                    <div className="circle-link" onClick={() => handleLinkClick('Breakfast')}>
                        <img src={breakfast} alt="Breakfast" />
                        <span>Breakfast</span>
                    </div>
                    <div className="circle-link" onClick={() => handleLinkClick('Lunch')}>
                        <img src={lunch} alt="Lunch" />
                        <span>Lunch</span>
                    </div>
                    <div className="circle-link" onClick={() => handleLinkClick('Popular')}>
                        <img src={popular} alt="Popular" />
                        <span>Popular</span>
                    </div>
                    <div className="circle-link" onClick={() => handleLinkClick('Kids')}>
                        <img src={kids} alt="Kids" />
                        <span>Kids</span>
                    </div>
                    <div className="circle-link" onClick={() => handleLinkClick('Dessert')}>
                        <img src={dessert} alt="Dessert" />
                        <span>Dessert</span>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {error && <div className="error-message">{error}</div>}

            <div className="recipe_container">

                {recipes.map((recipe, index) => (
                    <div className='recipe_card' key={index}>
                        <a href={`/recipe/${recipe.id}`}> <h3>{recipe.recipe_name}</h3></a>
                        <div className='image'>
                            <img src='./images/food2.png' alt='recipe image' />
                        </div>
                        <p>Author: {recipe.creator}</p>
                        <button id="btn_view" onClick={() => window.location.href = `/recipe/${recipe.id}`}>View </button>
                        <p>Category: {recipe.category}</p>
                        <p>Cuisine: {recipe.cuisine}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeMenu;*/

// new experminet to load the data 14.52 pm that also works and fetch data
/*import React, { useState, useEffect } from 'react';
import './RecipeMenu.css';
import RecipePage from './RecipePage';  // Import RecipePage component

function RecipeMenu() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);  // State to store the selected recipe

    useEffect(() => {
        fetchRecipes('All');  // Fetch all recipes on component mount
    }, []);

    const fetchRecipes = async (category) => {
        try {
            const url = category === 'All'
                ? `https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipes`
                : `https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipes/category?category=${category}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setRecipes(data);
                setError('');
                console.log("Recipes for", category, ":", data);
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
                setRecipes([]);
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setError('Failed to fetch recipes. Please try again later.');
            setRecipes([]);
        }
    };

    const handleViewRecipe = async (id) => {
        try {
            console.log(id)
            console.log("fetching by id")
            const response = await fetch(`https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipesbyid/id?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                console.log("data fetched")
                console.log(data)
                setSelectedRecipe(data);  // Set the selected recipe data
            } else {
                console.error('Error fetching recipe:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    };

    if (selectedRecipe) {
        return <RecipePage recipe={selectedRecipe} />;  // Render RecipePage if a recipe is selected
    }

    return (
        <div className='main_recipemenu'>
            <div className='top-section'>
                <div className='circle-links'>
                    <div className="circle-link" onClick={() => fetchRecipes('All')}>
                        <img src={'/images/all1.png'} alt="All" />
                        <span>All</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Dinner')}>
                        <img src={'/images/dinner.png'} alt="Dinner" />
                        <span>Dinner</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Breakfast')}>
                        <img src={'/images/bf.png'} alt="Breakfast" />
                        <span>Breakfast</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Lunch')}>
                        <img src={'/images/lunch.png'} alt="Lunch" />
                        <span>Lunch</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Popular')}>
                        <img src={'/images/popular.png'} alt="Popular" />
                        <span>Popular</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Kids')}>
                        <img src={'/images/kids.png'} alt="Kids" />
                        <span>Kids</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Dessert')}>
                        <img src={'/images/image.png'} alt="Dessert" />
                        <span>Dessert</span>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {error && <div className="error-message">{error}</div>}
            <div className="recipe_container">
                {recipes.map((recipe, index) => (
                    <div className='recipe_card' key={index}>
                        <h3>{recipe.recipe_name}</h3>
                        <div className='image'>
                            <img src='./images/food2.png' alt='recipe image' />
                        </div>
                        <p>Author: {recipe.creator}</p>
                        <button id="btn_view" onClick={() => handleViewRecipe(recipe.id)}>View</button>
                        <p>Category: {recipe.category}</p>
                        <p>Cuisine: {recipe.cuisine}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeMenu;*/

// new exp to include display in next page at 15.59pm
import React, { useState } from 'react';
import './RecipeMenu.css';
import dinner from '/images/dinner.png';
import breakfast from '/images/bf.png';
import lunch from '/images/lunch.png';
import kids from '/images/kids.png';
import popular from '/images/popular.png';
import dessert from '/images/image.png';
import all from '/images/all1.png';
import RecipePage from './RecipePage';

function RecipeMenu() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const fetchRecipes = async (category) => {
        try {
            const endpoint = category === 'All' ?
                'https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipes' :
                `https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipes/category?category=${category}`;

            const response = await fetch(endpoint);
            if (response.ok) {
                const data = await response.json();
                setRecipes(data);
                setError('');
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
                setRecipes([]);
            }

            setSelectedCategory(category);
        } catch (error) {
            setError('Failed to fetch recipes. Please try again later.');
            setRecipes([]);
        }
    };

    const handleViewRecipe = async (id) => {
        try {
            const response = await fetch(`https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipesbyid/id?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setSelectedRecipe(data[0]); // Select the first item in the array
            } else {
                console.error('Error fetching recipe:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    };

    if (selectedRecipe) {
        return <RecipePage recipe={selectedRecipe} />;
    }

    return (
        <div className='main_recipemenu'>
            <div className='top-section'>
                <div className='circle-links'>
                    <div className="circle-link" onClick={() => fetchRecipes('All')}>
                        <img src={all} alt="All" />
                        <span>All</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Dinner')}>
                        <img src={dinner} alt="Dinner" />
                        <span>Dinner</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Breakfast')}>
                        <img src={breakfast} alt="Breakfast" />
                        <span>Breakfast</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Lunch')}>
                        <img src={lunch} alt="Lunch" />
                        <span>Lunch</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Popular')}>
                        <img src={popular} alt="Popular" />
                        <span>Popular</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Kids')}>
                        <img src={kids} alt="Kids" />
                        <span>Kids</span>
                    </div>
                    <div className="circle-link" onClick={() => fetchRecipes('Dessert')}>
                        <img src={dessert} alt="Dessert" />
                        <span>Dessert</span>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {error && <div className="error-message">{error}</div>}

            <div className="recipe_container">
                {recipes.map((recipe, index) => (
                    <div className='recipe_card' key={index}>
                        <h3>{recipe.recipe_name}</h3>
                        <div className='image'>
                            <img src='./images/food2.png' alt='recipe' />
                        </div>
                        <p>Author: {recipe.creator}</p>
                        <button id="btn_view" onClick={() => handleViewRecipe(recipe.id)}>View</button>
                        <p>Category: {recipe.category}</p>
                        <p>Cuisine: {recipe.cuisine}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeMenu;