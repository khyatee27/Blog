/*import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LogIn.css';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    //const navigate = useNavigate();


    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Both email and password are required.');
            return;
        }

        const formData = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post('https://foodblog-api-554eaecd7d88.herokuapp.com/api/v1/auth/login', formData);
            console.log(response.data);
            console.log("Successfully logged in");
            setErrorMessage('');
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Failed to log in. Please check your email and password.');
        }
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();
        setShowSignUp(true);
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        setShowLogin(false);  // Hide the login form
        //     navigate('/');
    };

    if (showSignUp) {
        return <SignUp />;
    }

    if (!showLogin) {
        return null;  // Render nothing if showLogin is false
    }

    return (
        <div className='Login_main'>
            <form onSubmit={handleLoginSubmit}>
                <p>LogIn</p>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <input
                    id="uname"
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    id="pwd"
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button id='btnsubmit' type='submit'>Login </button>
                <p>Don't have an account yet? Sign up now</p>
                <button id='btnsignup' onClick={handleSignUpClick}>SignUp</button>
                <button id='btncancel' onClick={handleCancelClick}>Cancel</button>
            </form>

        </div>
    );
}

export default LogIn;*/
//with validation
import React, { useState } from 'react';
import axios from 'axios';
import './LogIn.css';
import SignUp from './SignUp';
import WelcomePage from './welcomePage';
function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Both email and password are required.');
            return;
        }

        const formData = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post('https://foodblog-api-554eaecd7d88.herokuapp.com/api/v1/auth/login', formData);
            console.log(response.data);
            console.log("Successfully logged in");
            setErrorMessage('');
            setIsLoggedIn(true);
            setShowLogin(false);
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Failed to log in. Please check your email and password.');
        }
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();
        setShowSignUp(true);
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        setShowLogin(false);  // Hide the login form
    };

    if (showSignUp) {
        return <SignUp />;
    }

    if (isLoggedIn) {
        return <WelcomePage />;
    }

    if (!showLogin) {
        return null;  // Render nothing if showLogin is false
    }

    return (
        <div className='Login_main'>
            <form onSubmit={handleLoginSubmit}>
                <p>LogIn</p>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <input
                    id="uname"
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    id="pwd"
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button id='btnsubmit' type='submit'>Login</button>
                <p>Don't have an account yet? Sign up now</p>
                <button id='btnsignup' onClick={handleSignUpClick}>SignUp</button>
                <button id='btncancel' onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    );
}

export default LogIn;