import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AuthenticatedPages/Home.css';




import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserName } from './userService'; 

const AuthenticatedHomePage = () => {
    const [userName, setUserName] = useState('');
    const wordStyle = {color: '#00008B'};

   useEffect(() => {
        const fetchUserName = async () => {
          try {
            const name = await getUserName();
            setUserName(name);
          } catch (error) {
            console.error('Failed to fetch user name:', error);
          }
        };    
        fetchUserName();
        console.log(userName);
      }, []);



    return (
        <div className='home-container'>

            <div className='title'>
                <p>Welcome back to QuickChats <span style={wordStyle}>{userName}!</span></p>
            </div>


        </div>
    );
    
}

export default AuthenticatedHomePage;