import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/NonAuthenticatedPages/Home.css'

const Home = () => {
    return (
        <div className='home-container'>

            <div className='title'>
                <h1>Welcome to QuickChats!</h1>
            </div>

            <div className='about'>
                <p>QuickChats is an application that allows users to chat and communicate with each other. The frontend of this app was developed in
                    framework React.js and the backend with Spring Boot (Java). The backend ultizes bla bla bla so on so on. QuickChats is an application that allows users to chat and communicate with each other. The frontend of this app was developed in
                    framework React.js and the backend with Spring Boot (Java). The backend ultizes bla bla bla so on so on
                </p>
            </div>

            <Link to="/login">
                <button>Get Started!</button>
            </Link>

            <Link to="/login">
                <div className='login-button'>
                    <button>Login</button>
                </div>

            </Link>


            <div className='signup-message'>
                <p>
                    Don’t have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
                </p>
            </div>

        </div>
    );
}

export default Home;