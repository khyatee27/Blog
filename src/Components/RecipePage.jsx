/*import React, { useState } from 'react'
import './RecipePage.css'
import StarRate from './StarRate'
import Comment from './Comment'
import { useParams } from 'react-router-dom';
function RecipePage() {
    const { id } = useParams();
    const [rating, setRating] = useState(0)
    return (
        <>

            <div className='recipe'>
                <table className='tbl_recipemain' >
                    <tr>
                        Recipe name:{id}
                    </tr>
                    <tr>Author name</tr>
                    <tr>
                        <td>Cook Time</td>
                        <td rowSpan={4} style={{ background: "grey" }}>Recipe image</td>
                    </tr>
                    <tr>
                        <td>Prep Time</td>
                    </tr>
                    <tr>
                        <td>Cuisine</td>
                    </tr>
                    <tr>
                        <td>Servings</td>
                    </tr>
                    <tr >
                        <td colSpan={2}>Ingredients</td>
                    </tr>
                    <tr >
                        <td style={{ height: "auto" }} colSpan={2}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae itaque velit eligendi ipsam ad, ducimus eaque quidem, aspernatur architecto temporibus soluta nemo? Tenetur minus porro impedit quasi error asperiores itaque!
                        </td>
                    </tr>
                    <tr >
                        <td colSpan={2}>Recipe</td>
                    </tr>
                    <tr >
                        <td style={{ height: "300px" }} colSpan={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quam libero, asperiores iusto obcaecati fuga fugiat qui quo culpa magnam sequi ducimus ipsum sit consectetur minus architecto quia, enim dolores!
                        </td>
                    </tr>
                    <tr >
                        <td ><div>
                            <StarRate rating={rating} setRating={setRating
                            } />
                        </div></td>
                        <td> Comment

                        </td>
                    </tr>
                    <tr >
                        <td > <div>
                            <StarRate rating={rating} setRating={setRating
                            } />
                        </div></td>
                        <td> Comment

                        </td>
                    </tr>

                    <Comment />
                </table>


            </div >
        </>
    )
}
export default RecipePage*/
// code works
/*import React, { useState, useEffect } from 'react';
import './RecipePage.css';
import StarRate from './StarRate';
import Comment from './Comment';
import { useParams } from 'react-router-dom';

function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getrecipesbyid/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setRecipe(data);
                } else {
                    console.error('Error fetching recipe:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className='recipe'>
            <table className='tbl_recipemain'>
                <tbody>
                    <tr>
                        <td>Recipe name: {recipe.recipe_name}</td>
                    </tr>
                    <tr>
                        <td>Author name: {recipe.creator}</td>
                    </tr>
                    <tr>
                        <td>Cook Time: {recipe.cook_time}</td>
                        <td rowSpan={4} style={{ background: 'grey' }}>
                            <img src={recipe.image_url || './images/food2.png'} alt='recipe' />
                        </td>
                    </tr>
                    <tr>
                        <td>Prep Time: {recipe.prep_time}</td>
                    </tr>
                    <tr>
                        <td>Cuisine: {recipe.cuisine}</td>
                    </tr>
                    <tr>
                        <td>Servings: {recipe.servings}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Ingredients: {recipe.ingredients}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ height: 'auto' }}>{recipe.description}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Recipe: {recipe.instructions}</td>
                    </tr>
                    <tr>
                        <td>
                            <StarRate rating={rating} setRating={setRating} />
                        </td>
                        <td>Comment</td>
                    </tr>
                    <tr>
                        <td>
                            <StarRate rating={rating} setRating={setRating} />
                        </td>
                        <td>Comment</td>
                    </tr>
                    <Comment />
                </tbody>
            </table>
        </div>
    );
}

export default RecipePage;*/

//latest experminet at 14.54 pm that works but no display of data
/*import React from 'react';
import './RecipePage.css';
import StarRate from './StarRate';
import Comment from './Comment';

function RecipePage({ recipe }) {
    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className='recipe'>
            <table className='tbl_recipemain'>
                <tbody>
                    <tr>
                        <td>Recipe name: {recipe.recipe_name}</td>
                    </tr>
                    <tr>
                        <td>Author name: {recipe.creator}</td>
                    </tr>
                    <tr>
                        <td>Cook Time: {recipe.cook_time}</td>
                        <td rowSpan={4} >
                            <img className='recipecard_img' src={recipe.image_url || './images/recipe.jpeg'} alt='recipe' />
                        </td>
                    </tr>
                    <tr>
                        <td>Prep Time: {recipe.prep_time}</td>
                    </tr>
                    <tr>
                        <td>Cuisine: {recipe.cuisine}</td>
                    </tr>
                    <tr>
                        <td>Servings: {recipe.servings}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Ingredients: {recipe.ingredients}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ height: 'auto' }}>{recipe.description}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Recipe: {recipe.instructions}</td>
                    </tr>
                    <tr>
                        <td>
                            <StarRate rating={recipe.rating} setRating={null} />
                        </td>
                        <td>Comment</td>
                    </tr>
                    <tr>
                        <td>
                            <StarRate rating={recipe.rating} setRating={null} />
                        </td>
                        <td>Comment</td>
                    </tr>
                    <Comment />
                </tbody>
            </table>
        </div>
    );
}

export default RecipePage;*/

//new exp at 16.01 to load data
import React, { useState, useEffect } from 'react';
import './RecipePage.css';
import StarRate from './StarRate';
import Comment from './Comment';

function RecipePage({ recipe }) {
    const recipe_id = recipe.id;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (recipe) {
            fetchComments(recipe.id);
        }
    }, [recipe]);

    const fetchComments = async (recipeId) => {
        try {
            const response = await fetch(`https://khyatiscookstory-backend-0ff6302bd606.herokuapp.com/api/getcomments?recipe_id=${recipeId}`);
            if (response.ok) {
                const data = await response.json();
                setComments(data);
            } else {
                console.error('Failed to fetch comments');
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    if (!recipe) {
        return <div>Loading...</div>;
    }

    console.log(recipe_id)
    return (
        <div className='recipe_desc'>
            <table className='tbl_recipe_desc'>
                <tbody>
                    <tr>
                        <td style={{ backgroundColor: "#f37e60", color: "white" }}>Recipe name: {recipe.recipe_name}</td>
                        <td rowSpan={5} >
                            <img className='recipecard_img' src={recipe.image_url || './images/recipe.jpeg'} alt='recipe' />
                        </td>
                    </tr>
                    <tr>
                        <td >Author name: {recipe.creator}</td>

                    </tr>
                    <tr>
                        <td>
                            <img className='recipecard_logo' src='./images/time.png' alt='time icon' />
                            Cook Time: {recipe.timetocook}  | Prep Time: {recipe.timetoprepare}

                        </td>

                    </tr>
                    <tr>

                        <td>Cuisine: {recipe.cuisine}</td>
                    </tr>

                    <tr>
                        <td>Servings: {recipe.servings}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Ingredients: {recipe.ingredients}</td>
                    </tr>

                    <tr>
                        <td colSpan={2} style={{ backgroundColor: " #f37e60", color: "white" }}>Recipe: {recipe.instructions}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}> Step1: {recipe.content1}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}> Step2: {recipe.content2}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}> Step3: {recipe.content3}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}> Step4: {recipe.content4}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}> Step5: {recipe.content5}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}> Step6: {recipe.content6}</td>
                    </tr>
                </tbody>
            </table>


            <table className='tbl_Comment' >
                <tbody>
                    <span className='text_review'>Reviews:</span><br />
                    {comments.map((comment) => (
                        <tr key={comment.id}>

                            <td style={{ width: "100px" }} className="comment-user"><img className='user_logo' src='./images/user_.png' alt='user' />{comment.user_name}</td>
                            <td className="comment-td">{comment.comment}</td>
                            <td className="star-rating-td">
                                <StarRate rating={comment.rating} setRating={null} />
                            </td>
                        </tr>
                    ))}
                    <Comment recipeId={recipe_id} />
                </tbody>
            </table>
        </div>
    );
}
export default RecipePage;