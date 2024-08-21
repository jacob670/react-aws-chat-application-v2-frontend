import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AccountForm.css'
import { json, Link, useLocation, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const location = useLocation();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8083/api/auth/loginRequest', { name, password }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    password: password
                })
            });


            const { accessToken, idToken, refreshToken, expiresIn } = response.data;

            sessionStorage.setItem("accessToken", accessToken);
            sessionStorage.setItem("idToken", idToken);
            sessionStorage.setItem("refreshToken", refreshToken);

            navigate('/quickChats')
            
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
                        <span>Sign in</span>
                        <p>Please sign in to access the app.</p>
                    </div>
                    <div class="inputs">
                        <input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} required />
                        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button>Sign in</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default LoginForm;
