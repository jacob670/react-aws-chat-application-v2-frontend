import React, { useState } from 'react';
import axios from 'axios';
import './AccountForm.css'
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const[email, setEmail] = useState('');
    const[name, setName] =  useState('');
    const[password, setPassword] = useState('')
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8083/api/auth/signUpRequest', { email, name, password }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email, name, password),
            });

            localStorage.setItem('signupStatus', 'success');

            navigate('/confirmation')
            setMessage(response.data);
        } catch (error) {
            setMessage('Form submission failed');
        }
    };

    return (
        /* From Uiverse.io by TasneemHatem97 */
        <div class="body">
            <div class="container">
                <form onSubmit={handleSubmit}>
                <Link to="/" className='text-link'>
                    <h1>QuickChats!</h1>
                </Link>

                    <div class="head">
                        <span>Sign up</span>
                        <p>Create an with just account with your email.</p>
                    </div>
                    <div class="inputs">
                        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} required/>
                        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <button>Sign up</button>
                </form>
                <p>{message}</p>
            </div>

        </div>
    );
}

export default SignUpForm;
