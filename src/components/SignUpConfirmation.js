import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUpConfirmationCode.css'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';



function SignUpConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { token } = useParams();
    const [confirmationCode, setConfirmationCode] = useState('');
    const [isValidToken, setIsValidToken] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (!token) {
            return;
        }

        const fetchToken = async () => {
            try {
                const response = await axios.get(`http://localhost:8083/api/auth/confirmSignUp/${token}`);
                console.log(response.data);

                localStorage.setItem("confirmationToken", token);
            }
            catch (error) {
                console.error('Confirmation failed:', error);
            }
        };
        fetchToken();

    }, [token]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submit handler triggered:", token);

        const username = localStorage.getItem("username");

        try {
            const response = await axios.post(`http://localhost:8083/api/auth/confirmSignUp/${token}`, { confirmationCode, username }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    confirmationCode: confirmationCode,
                    username: username
                })
            });

            // little bug i dont even know
            if (response.status === 200 ) {
                console.log(response.data);
                console.log(confirmationCode)
    
                localStorage.removeItem("confirmationToken");
                localStorage.removeItem("username");
    
                navigate("/");

            } else {
                console.log("i dont know")
            }


        } catch (error) {
            setErrorMessage("Invalid Confirmation Code Entered. Please Try Again")
            console.log(error);
        }
    };


    return (

        <div class='form-container'>

            <form onSubmit={handleSubmit}>
                <p>A confirmation code was sent to your email. Please enter the code:</p>
                <input
                    type="text"
                    value={confirmationCode}
                    onChange={(e) => setConfirmationCode(e.target.value)}
                    placeholder="Confirmation Code"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            </form>
        </div>
    );
}

export default SignUpConfirmationPage;