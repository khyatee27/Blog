import React from 'react';

function WelcomePage() {
    return (
        <div>
            <h3>
                <p>Welcome to FoodBlog!</p></h3>
            <p>You have successfully logged in.</p>
            <br />
            <p>   <button className='b'>View Recipe</button>
                <button className='b'>Delete Recipe</button>
                <button className='b'>Edit Recipe</button></p>
        </div>

    );
}

export default WelcomePage;