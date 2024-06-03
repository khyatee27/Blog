/*import React, { useState } from 'react';
import './ContactUs.css';
import phoneLogo from './phone.png';
import emailLogo from './email.png';
import axios from 'axios';
import { Form } from 'react-router-dom';
function ContactUs() {
    const initialFormData = {
        name: '',
        lastname: '',
        email: '',
        PhoneNO: '',
        contact_content: '',
        TypeOfQuery: 'Others'

    }
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        if (e.target.name === 'TypeOfQuery') {
            setFormData({ ...formData, TypeOfQuery: e.target.value });
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('https://foodblog-api-554eaecd7d88.herokuapp.com/api/v1/contact', formData);
            console.log(response.data);

            setFormData('');

            console.log("contact details added")
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error, maybe show an error message
        }
    };

    return (
        <div className='contact'>
            <div className='div_contact1'>
                <img src={phoneLogo} alt='not found' />
                <label id="Phone">  Call us on +12345678   Mon to Fri 9AM to 6PM</label>
            </div>
            <div className='div_contact2'>
                <img src={emailLogo} alt="log not found" />
                <label id="Email">   Email : email@gmail.com or Send us queries below :</label><br />
            </div>
            <form onSubmit={handleSubmit}>
                <label id="name">First Name</label>
                <input type='text' id='name' onChange={handleChange} ></input><br />
                <label id="lastname">Last Name</label>
                <input type='text' id='lastname' onChange={handleChange} ></input><br />
                <label id="email">E-mail</label>
                <input type='text' id='email' onChange={handleChange} ></input><br />
                <label id="PhoneNO">Contact</label>
                <input type='text' id='PhoneNO' placeholder='Enter your Phone number' onChange={handleChange} ></input><br />
                <label id="type">Type of Query</label>
                <label>
                    <input type="radio" id="TypeOfQuery1" name="TypeOfQuery" value="Professional" onChange={handleChange} />Professional </label>
                <label>
                    <input type="radio" id="TypeOfQuery2" name="TypeOfQuery" value="Others" defaultChecked onChange={handleChange} />Others</label><br />
                <label id="">
                    <textarea id='contact_content' rows={3} cols={70} placeholder='Write your message here' maxLength={200} name='contact_content' onChange={handleChange} />
                </label>
                <br />
                <div className='btn_group'>
                    <button id="btn_submit" >Send Message</button>
                    <button id="btn_cancel" type="reset" >  Cancel  </button>
                </div>
            </form>
        </div>
    )
}
export default ContactUs*/
import React, { useState } from 'react';
import './ContactUs.css';
import phoneLogo from './phone.png';
import emailLogo from './email.png';
import axios from 'axios';

function ContactUs() {
    const initialFormData = {
        name: '',
        lastname: '',
        email: '',
        PhoneNO: '',
        contact_content: '',
        TypeOfQuery: 'Others'
    };

    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'TypeOfQuery') {
            setFormData({ ...formData, TypeOfQuery: e.target.value });
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        }
        setSuccessMessage('');
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.lastname || !formData.email || !formData.PhoneNO || !formData.contact_content) {
            setErrorMessage('All fields are required.');
            return;
        }

        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(formData.PhoneNO)) {
            setErrorMessage('Please enter a valid phone number with 10-15 digits.');
            return;
        }

        try {
            const response = await axios.post('https://foodblog-api-554eaecd7d88.herokuapp.com/api/v1/contact', formData);
            console.log(response.data);

            setFormData(initialFormData);
            setSuccessMessage('Thank you for writing to us!');
        } catch (error) {
            console.error('Error submitting contact details:', error);
            setErrorMessage('Error submitting contact details. Please try again.');
        }
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setSuccessMessage('');
        setErrorMessage('');
    };

    return (
        <div className='contact'>
            <div className='div_contact1'>
                <img src={phoneLogo} alt='Phone logo not found' />
                <label id="Phone">Call us on +12345678 Mon to Fri 9AM to 6PM</label>
            </div>
            <div className='div_contact2'>
                <img src={emailLogo} alt="Email logo not found" />
                <label id="Email">Email : email@gmail.com or Send us queries below :</label><br />
            </div>
            <form onSubmit={handleSubmit}>
                <label id="name">First Name</label>
                <input type='text' id='name' value={formData.name} onChange={handleChange} /><br />
                <label id="lastname">Last Name</label>
                <input type='text' id='lastname' value={formData.lastname} onChange={handleChange} /><br />
                <label id="email">E-mail</label>
                <input type='text' id='email' value={formData.email} onChange={handleChange} /><br />
                <label id="PhoneNO">Contact</label>
                <input type='text' id='PhoneNO' placeholder='Enter your Phone number' value={formData.PhoneNO} onChange={handleChange} /><br />
                <label id="type">Type of Query</label>
                <label>
                    <input type="radio" id="TypeOfQuery1" name="TypeOfQuery" value="Professional" checked={formData.TypeOfQuery === 'Professional'} onChange={handleChange} />Professional
                </label>
                <label>
                    <input type="radio" id="TypeOfQuery2" name="TypeOfQuery" value="Others" checked={formData.TypeOfQuery === 'Others'} onChange={handleChange} />Others
                </label><br />
                <label id="">
                    <textarea id='contact_content' rows={3} cols={70} placeholder='Write your message here' maxLength={200} name='contact_content' value={formData.contact_content} onChange={handleChange} />
                </label>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}<br />
                <br />
                <div className='btn_group'>
                    <button id="btn_submit" type="submit">Send Message</button>
                    <button id="btn_cancel" type="button" onClick={handleReset}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default ContactUs;
