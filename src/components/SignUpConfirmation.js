import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AccountForm.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';

function SignUpConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const signupStatus = localStorage.getItem('signupStatus');

        if (signupStatus !== 'success') {
            navigate('/signup');
        } else {
            localStorage.removeItem('signupStatus');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Thank you for signing up!</h1>
        </div>
    );
}

export default SignUpConfirmationPage;