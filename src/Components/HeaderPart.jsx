import React, { useState } from 'react'
import './HeaderPart.css'
import myImage from './Khyatis_CookStory6.png';
import { Link, BrowserRouter, Router } from 'react-router-dom';
import ContactUs from './ContactUs';
import About from './About';
import RecipePage from './RecipePage';
import WorkShop from './WorkShop';
import LogIn from './LogIn';
import SearchPage from './SearchPage';

import SignUp from './SignUp';
import AddRecipe from './AddRecipe';
import login_img from './login.png';
import search from './search.png';
import MiddleHome from './MiddleHome';
import RecipeMenu from './RecipeMenu';
function HeaderPart({ handleLinkClick }) {


    return (
        <>

            <div className='main'>
                <div className='logo_div'>
                    <img src={myImage} alt="logo not found" />
                </div>

                <div className='link_header'>
                    <BrowserRouter>
                        <Link to="/Home" className='link' onClick={() => handleLinkClick(<MiddleHome />)}>Home</Link>

                        <Link to="/about" className='link' onClick={() => handleLinkClick(<About />)}>About</Link>
                        <Link to="/addrecipe" className='link' onClick={() => handleLinkClick(<AddRecipe />)}>Post Recipe</Link>
                        <Link to="/recipemenu" className='link' onClick={() => handleLinkClick(<RecipeMenu />)}>View Recipe</Link>
                        <Link to="/workshop" className='link' onClick={() => handleLinkClick(<WorkShop />)}>Workshop</Link>
                        <Link to="/contactus" className='link' onClick={() => handleLinkClick(<ContactUs />)}>Contact Us</Link>
                        <div className='search-container'>
                            <input type='text' id='search' className='search' placeholder='Search' />
                            <Link to="/search" className='link' onClick={() => handleLinkClick(<SearchPage />)}>
                                <img src={search} id='img_search' alt='Search' />
                            </Link>
                        </div>
                        <Link to="/login" className='link' onClick={() => handleLinkClick(<LogIn />)}>
                            <img src={login_img} alt='login' />
                        </Link>

                    </BrowserRouter>
                </div>
            </div>


        </>
    )
}
export default HeaderPart;

{/* <Routes>
                    <Route path="/">Home</Route>
                    <Route path="" element={<About />}>
                        About
                    </Route>
                    <Route path="/Recipepage" element={<RecipePage />}>Recipes</Route>
                    <Route path="/Workshop" element={<WorkShop />}>Workshop</Route>
                    <Route path="/ContactUs" element={<ContactUs />}>Contact Us</Route>
                    <Route path="/Search" element={<SearchPage />}>Search</Route>
                    <Route path="/Login" element={<LogIn />}>Login</Route>
                    <Route path="/signup" element={<SignUp />} />


    </Routes>*/}
{/*} <Link to={"/"}>Home</Link>
                     <Link to={"/About"}>About</Link>
                    <Link to={"/Recipes"}>Recipes</Link>
                    <Link to={"/Workshop"}>Workshop</Link>
                    <Link to={"/ContactUs"}>Contact Us</Link>
                    <Link to={"/Search"}>Search</Link>
    <Link to={"/Login"}>Login</Link>*/}




//new experimnet is here which doesnt click linnks

