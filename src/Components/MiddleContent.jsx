
{/*import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MiddleHome from './MiddleHome';
import About from './About';
import AddRecipe from './AddRecipe';
import WorkShop from './WorkShop';
import ContactUs from './ContactUs';
import SearchPage from './SearchPage';
import LogIn from './LogIn';
import SignUp from './SignUp';

function MiddleContent({ component }) {
    return (

        <Routes>
            <Route path="/" element={<MiddleHome />} />
            <Route path="/home" element={<MiddleHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipepage" element={<AddRecipe />} />
            <Route path="/workshop" element={<WorkShop />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>

    );
}

export default MiddleContent;*/}
import React from 'react';
import './MiddleContent.css';

function MiddleContent({ component }) {
    return (
        <div className="middle-content">
            {component}
        </div>

    );
}

export default MiddleContent;
