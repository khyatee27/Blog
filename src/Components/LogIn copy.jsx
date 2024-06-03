import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LogIn.css';
import SignUp from './SignUp';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSignUp, setShowSignUp] = useState(false);
    const handleSubmit = async (e) => {
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
            console.log("successfully login")
            setErrorMessage('');
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage(('Failed to log in. Please check your email and password.'));
        }
    };
    const handleSignUpClick = () => {
        setShowSignUp(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='Login_main'>
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

                <button id='btnsubmit' type='submit'>Submit</button>

                <p> New here?</p>

            </div>



        </form>
    );
}

export default LogIn; 