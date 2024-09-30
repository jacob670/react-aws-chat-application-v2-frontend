import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/NonAuthenticatedPages/Home.css'

const Home = () => {
    return (
        <div className='home-container'>

            <div className='title'>
                <h1>Welcome to EasyEntertainment!</h1>
            </div>

            <div className='about'>
                <p>EasyEntertainment is an application that allows individuals to express their love of movies. The frontend of this app was developed in
                   React.js and the backend with Spring Boot (Java). AWS services are also included in order to make the application efficient and scalable.
                   The services used include Cognito, DynamoDB, API Gateway, Lambdas, and IAM. Users in this app can do everything from having a watchlist to getting
                   movie recommendations!
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