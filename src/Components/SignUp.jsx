



/*import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import CountrySelector from './CountrySelector';

function SignUp() {
    const initialFormData = {
        name: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        repassword: '',
        country: ''
    };
    const [formData, setFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setErrorMessage('All fields are required.');
            return;
        }
        if (formData.password !== formData.repassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('https://foodblog-api-554eaecd7d88.herokuapp.com/api/v1/auth/register', formData);
            console.log(response.data);
            setFormData(initialFormData);
            setErrorMessage('');
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error, maybe show an error message
        }
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrorMessage('');
        // Optionally, you can navigate back or hide the sign-up form
    };

    const validateForm = () => {
        for (const key in formData) {
            if (formData[key].trim() === '') {
                return false;
            }
        }
        return true;
    };

    return (
        <div className='signup_main'>
            <label>Enter your details for Sign Up</label><br />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">First Name</label>
                <input type='text' id='name' value={formData.name} onChange={handleChange} /><br />
                <label htmlFor="lastname">Last Name</label>
                <input type='text' id='lastname' value={formData.lastname} onChange={handleChange} /><br />
                <label htmlFor="email">Email</label>
                <input type='text' id='email' value={formData.email} onChange={handleChange} /><br />
                <label htmlFor="username">Username</label>
                <input type='text' id='username' value={formData.username} onChange={handleChange} /><br />
                <label htmlFor="password">Password</label>
                <input type='password' placeholder='Should be 8 characters minimum' id='password' value={formData.password} onChange={handleChange} /><br />
                <label htmlFor="repassword">Re-Enter Password</label>
                <input type='password' id='repassword' value={formData.repassword} onChange={handleChange} /><br />
                <label htmlFor="country">Country</label>
                <CountrySelector id="country" value={formData.country} onChange={handleChange} />
                <div className='btn_signup'>
                    <button type="submit">Sign Up</button><br />
                    <button type="reset">Cancel</button><br />
                </div>
            </form>
        </div>
    );
}

export default SignUp;*/
// SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import CountrySelector from './CountrySelector';

function SignUp() {
    const initialFormData = {
        name: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        repassword: '',
        country: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleCountryChange = (country) => {
        setFormData({ ...formData, country });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setErrorMessage('All fields are required.');
            return;
        }
        if (formData.password !== formData.repassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('https://foodblog-api-554eaecd7d88.herokuapp.com/api/v1/auth/register', formData);
            console.log(response.data);
            setFormData(initialFormData);
            setErrorMessage('');
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error, maybe show an error message
        }
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrorMessage('');
        // Optionally, you can navigate back or hide the sign-up form
    };

    const validateForm = () => {
        for (const key in formData) {
            if (formData[key].trim() === '') {
                return false;
            }
        }
        return true;
    };

    return (
        <div className='signup_main'>
            <label>Enter your details for Sign Up</label><br />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">First Name</label>
                <input type='text' id='name' value={formData.name} onChange={handleChange} /><br />
                <label htmlFor="lastname">Last Name</label>
                <input type='text' id='lastname' value={formData.lastname} onChange={handleChange} /><br />
                <label htmlFor="email">Email</label>
                <input type='text' id='email' value={formData.email} onChange={handleChange} /><br />
                <label htmlFor="username">Username</label>
                <input type='text' id='username' value={formData.username} onChange={handleChange} /><br />
                <label htmlFor="password">Password</label>
                <input type='password' placeholder='Should be 8 characters minimum' id='password' value={formData.password} onChange={handleChange} /><br />
                <label htmlFor="repassword">Re-Enter Password</label>
                <input type='password' id='repassword' value={formData.repassword} onChange={handleChange} /><br />
                <label htmlFor="country">Country</label>
                <CountrySelector value={formData.country} onChange={handleCountryChange} />
                <div className='btn_signup'>
                    <button type="submit">Sign Up</button><br />
                    <button type="reset" onClick={handleCancel}>Cancel</button><br />
                </div>
            </form>
        </div>
    );
}

export default SignUp;