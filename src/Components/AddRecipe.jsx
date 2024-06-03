
import React, { useState } from 'react';
import './AddRecipe.css';
import axios from 'axios';

function AddRecipe() {

    const initialRecipeData = {
        recipe_name: '',
        creator: '',
        timetocook: '',
        timetoprepare: '',
        category: '',
        cuisine: '',
        servings: '',
        ingredients: [],
        nutritional_values: '',
        search_keywords: '',
        content1: '',
        content2: '',
        content3: '',
        content4: '',
        content5: '',
        content6: '',
    };

    const [recipeData, setRecipeData] = useState(initialRecipeData);
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setRecipeData({ ...recipeData, [id]: value });
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...recipeData.ingredients];
        newIngredients[index] = value;
        setRecipeData({ ...recipeData, ingredients: newIngredients });
    };

    const addIngredientInput = () => {
        setRecipeData({ ...recipeData, ingredients: [...recipeData.ingredients, ''] });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const resetForm = () => {
        setRecipeData(initialRecipeData);
        setFile(null);
        setError(null);
    };
    //validation for integer
    const validateServings = (value) => {
        return /^[0-9]+$/.test(value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Insert initiated');



        // Perform validation
        const requiredFields = ['recipe_name', 'creator', 'timetocook', 'category', 'cuisine', 'servings', 'ingredients', 'nutritional_values', 'search_keywords', 'content1'];
        const emptyFields = requiredFields.filter(field => !recipeData[field]);

        if (emptyFields.length > 0) {
            const errorMessage = `Please fill in the following Required fields*  : ${emptyFields.join(', ')}`;
            setError({ message: errorMessage });
            return;
        }

        // Validate servings
        if (!validateServings(recipeData.servings)) {
            setError({ message: 'No of Servings must be an integer.' });
            return;
        }
        // Convert ingredients array to a comma-separated string
        const ingredientsString = recipeData.ingredients.join('. ');

        // Prepare the form data object
        const formData = {
            recipe_name: recipeData.recipe_name,
            creator: recipeData.creator,
            ingredients: ingredientsString,
            timetocook: recipeData.timetocook,
            timetoprepare: recipeData.timetoprepare,
            category: recipeData.category,
            cuisine: recipeData.cuisine,
            servings: recipeData.servings,
            nutritional_values: recipeData.nutritional_values,
            search_keywords: recipeData.search_keywords,
            content1: recipeData.content1,
            content2: recipeData.content2,
            content3: recipeData.content3,
            content4: recipeData.content4,
            content5: recipeData.content5,
            content6: recipeData.content6,
            guest_recipes: 'false'
        };

        console.log(formData)

        try {
            console.log('Sending request to server...');
            const response = await fetch('https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/addrecipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            let responseData;
            if (response.ok) {
                const text = await response.text();
                responseData = text ? JSON.parse(text) : {};
                console.log('Recipe created successfully:', responseData);
                alert('Recipe created successfully!');
                resetForm();
                setError();
            } else {
                const errorText = await response.text();
                const errorData = errorText ? JSON.parse(errorText) : { message: 'Unknown error' };
                console.error('Error creating recipe:', errorData);
                setError(errorData);
            }
        } catch (error) {
            console.error('No response received:', error);
            setError({ message: 'No response received' });
        }
    };

    return (
        <>

            <p> Enter Recipe details below to create new Recipe.To post as guest user please make sure to log in!</p>

            <div className='recipe'>

                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <table className='tbl_recipemain' >
                        <tbody>
                            <tr><td colSpan={2}>
                                {error && <div className="error-message" style={{ color: 'red', display: 'block' }}>{error.message}</div>}</td></tr>
                            <tr>

                                <td>Recipe name</td>
                                <td><input type="text" id="recipe_name" value={recipeData.recipe_name} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Author name</td>
                                <td><input type="text" id="creator" value={recipeData.creator} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td><input type="text" id="category" value={recipeData.category} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Cook Time</td>
                                <td><input type="text" id="timetocook" value={recipeData.timetocook} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Prep Time</td>
                                <td><input type="text" id="timetoprepare" value={recipeData.timetoprepare} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Cuisine</td>
                                <td><input type="text" id="cuisine" value={recipeData.cuisine} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Servings</td>
                                <td><input type="text" id="servings" placeholder='No of Servings' value={recipeData.servings} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Ingredients</td>
                                <td>
                                    {recipeData.ingredients.map((ingredient, index) => (
                                        <div key={index}>
                                            <input
                                                type="text"
                                                value={ingredient}
                                                onChange={(e) => handleIngredientChange(index, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                    <button className='btn_recipeadd' type="button" id='btn_add' onClick={addIngredientInput}>Add Ingredient</button>
                                </td>
                            </tr>
                            <tr>
                                <td >Recipe Steps</td>

                                <td>
                                    <div className='steps'><textarea className='recipe_step' rows={2} cols={150} placeholder={"Add Recipe Step 1"} wrap="soft" name="name" maxLength={400} id="content1" value={recipeData.content1} onChange={handleInputChange} /></div>

                                    <div><textarea className='recipe_step' rows={2} cols={150} placeholder={"Add Recipe Step 2"} wrap="soft" name="name" maxLength={400} id="content2" value={recipeData.content2} onChange={handleInputChange} /></div>
                                    <div><textarea className='recipe_step' rows={2} cols={150} placeholder={"Add Recipe Step 3"} wrap="soft" name="name" maxLength={400} id="content3" value={recipeData.content3} onChange={handleInputChange} /></div>
                                    <div><textarea className='recipe_step' rows={2} cols={150} placeholder={"Add Recipe Step 4"} wrap="soft" name="name" maxLength={400} id="content4" value={recipeData.content4} onChange={handleInputChange} /></div>
                                    <div><textarea className='recipe_step' rows={2} cols={150} placeholder={"Add Recipe Step 5"} wrap="soft" name="name" maxLength={400} id="content5" value={recipeData.content5} onChange={handleInputChange} /></div>
                                    <div><textarea className='recipe_step' rows={2} cols={150} placeholder={"Add Recipe Step 6"} wrap="soft" name="name" maxLength={400} id="content6" value={recipeData.content6} onChange={handleInputChange} /></div>
                                </td>
                            </tr>

                            <tr>
                                <td>Nutritional Values (comma-separated)</td>
                                <td><input type="text" id="nutritional_values" value={recipeData.nutritional_values} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Keywords for Search (comma-separated)</td>
                                <td><input type="text" id="search_keywords" value={recipeData.search_keywords} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Image</td>
                                <td>
                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                </td>
                            </tr>
                            <tr >
                                <td colSpan={2}>

                                    <button className='btn_recipeadd' id='btn_submit' type="submit">Submit</button>
                                    <button className='btn_recipeadd' id='btn_cancel' type="reset" onClick={resetForm}>Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>
        </>
    );
}

export default AddRecipe;