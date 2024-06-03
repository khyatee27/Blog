/*import React, { useState } from 'react';
import './MiddleHome.css';
import axios from 'axios';
import dinner from '/images/dinner.JPG?url';
import breakfast from '/images/bf.jpg?url';
import lunch from '/images/lunch.JPG?url';
import kids from '/images/kids.JPG?url';
import popular from '/images/popular.png';
import dessert from '/images/dessert1.JPG?url';
import all from '/images/all1.png';

import MiddleContent from './MiddleContent';

function MiddleHome() {
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
        <div className='main_menu_home'>
            <div className='top-section_square'>
                <img className='welcome' src='/images/welcome.png' alt='WELCOME' />
                <div className='square-links'>


                    <div className="square-link" onClick={() => handleLinkClick('Dinner')}>
                        <img src={dinner} alt="Dinner" />
                        <span>Dinner</span>
                    </div>
                    <div className="square-link" onClick={() => handleLinkClick('Breakfast')}>
                        <img src={breakfast} alt="Breakfast" />
                        <span>Breakfast</span>
                    </div>
                    <div className="square-link" onClick={() => handleLinkClick('Lunch')}>
                        <img src={lunch} alt="Lunch" />
                        <span>Lunch</span>
                    </div>

                    <div className="square-link" onClick={() => handleLinkClick('Kids')}>
                        <img src={kids} alt="Kids" />
                        <span>Kids</span>
                    </div>
                    <div className="square-link" onClick={() => handleLinkClick('Dessert')}>
                        <img src={dessert} alt="Dessert" />
                        <span>Dessert</span>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {error && <div className="error-message">{error}</div>}

            <div className="recipe_container_square">

                {recipes.map((recipe, index) => (
                    <div className='recipe_card_square' key={index}>
                        <a href={`/recipe/${recipe.id}`}> <h3>{recipe.recipe_name}</h3></a>
                        <div className='image'>
                            <img src='./images/food2.png' alt='recipe image' />
                        </div>
                        <p>Author: {recipe.creator}</p>
                        <button className='btn_viewrecipe_home' id="btn_view" onClick={() => window.location.href = `/recipe/${recipe.id}`}>View </button>
                        <p>Category: {recipe.category}</p>
                        <p>Cuisine: {recipe.cuisine}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default MiddleHome;*/
//new exp at 2 AM
import React, { useState } from 'react';
import './MiddleHome.css';
import axios from 'axios';
import dinner from '/images/dinner.JPG?url';
import breakfast from '/images/bf.jpg?url';
import lunch from '/images/lunch.JPG?url';
import kids from '/images/kids.JPG?url';
import popular from '/images/popular.png';
import dessert from '/images/dessert1.JPG?url';
import all from '/images/all1.png';

import MiddleContent from './MiddleContent';

function MiddleHome() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);


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

    const handleViewRecipe = async (id) => {
        try {
            console.log("recipe fetch")
            const response = await fetch(`https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipesbyid/id?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data[0])
                setSelectedRecipe(data[0]); // Select the first item in the array
            } else {
                console.error('Error fetching recipe:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    }

    if (selectedRecipe) {
        console.log(selectedRecipe)
        return <RecipePage recipe={selectedRecipe} />;
    }

    return (
        <div className='main_menu_home'>
            <div className='top-section_square'>
                <img className='welcome' src='/images/welcome.png' alt='WELCOME' />
                <div className='square-links'>


                    <div className="square-link" onClick={() => handleLinkClick('Dinner')}>
                        <img src={dinner} alt="Dinner" />
                        <span>Dinner</span>
                    </div>
                    <div className="square-link" onClick={() => handleLinkClick('Breakfast')}>
                        <img src={breakfast} alt="Breakfast" />
                        <span>Breakfast</span>
                    </div>
                    <div className="square-link" onClick={() => handleLinkClick('Lunch')}>
                        <img src={lunch} alt="Lunch" />
                        <span>Lunch</span>
                    </div>

                    <div className="square-link" onClick={() => handleLinkClick('Kids')}>
                        <img src={kids} alt="Kids" />
                        <span>Kids</span>
                    </div>
                    <div className="square-link" onClick={() => handleLinkClick('Dessert')}>
                        <img src={dessert} alt="Dessert" />
                        <span>Dessert</span>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {error && <div className="error-message">{error}</div>}

            <div className="recipe_container_square">

                {recipes.map((recipe, index) => (
                    <div className='recipe_card_square' key={index}>
                        <h3>{recipe.recipe_name}</h3>
                        <div className='image'>
                            <img src='./images/food2.png' alt='recipe image' />
                        </div>
                        <p>Author: {recipe.creator}</p>
                        <button className='btn_viewrecipe_home' Click={() => handleViewRecipe(recipe.id)}>View</button>
                        <p>Category: {recipe.category}</p>
                        <p>Cuisine: {recipe.cuisine}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}


export default MiddleHome;

