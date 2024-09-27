import React, { useState } from 'react';
import axios from 'axios';
import '../css/NonAuthenticatedPages/AccountForm.css'
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8083/api/auth/signUpRequest', { email, name, password }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    username: name,
                    password: password
                })
            });

            const url = response.data;

            localStorage.setItem("username", name);
            navigate(url);

        } catch (error) {
            // if there is a response
            if (error.response) {
                if (error.response.status === 400) {
                    setMessage("Invalid password was entered. Please have 8 CHARACTERS MINIMUM, 1 UPPER & 1 LOWER, 1 NUMBER, 1 SPECIAL CHARACTER");
                    setUserMessage(' ');
                } else if (error.response.status === 409) {
                    setUserMessage('The username already exists');
                    setMessage(" ");
                } else {
                    setMessage('Error: ' + error.response.message);
                }
            }
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
                        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} required />
                        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {message && <p style={{ color: 'red' }}>{message}</p>}
                    {userMessage && <p style={{ color: 'red' }}>{userMessage}</p>}
                    <button>Sign up</button>
                </form>
            </div>

        </div>
    );
}

export default SignUpForm;
