import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AuthenticatedPages/styles.css';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserName } from './userService';

const AuthenticatedHomePage = () => {
  const [userName, setUserName] = useState('');
  const wordStyle = { color: '#00008B' };

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

    <div className='container'>

      <div class='header'>
        <h1>Welcome back to QuickChats <span style={wordStyle}>{userName}!</span></h1>
      </div>

      <div class='button-container'>

        <div class='button-wrapper'>
          <Link to="/trendingMovies">
            <button class="option-butt">Explore Trending Movies</button>
          </Link>

          <div class="hover-text">
            This link will direct you to a page where trending news and movies will be shown!
            In other words, get new info on upcoming events!
          </div>
        </div>


        <div class='button-wrapper'>
          <Link to="/movieBlog">
            <button class="option-butt">Visit Your Movie Blogs and Reviews</button>
          </Link>

          <div class="hover-text">
            Visit this page if you want to view all you blogs and reviews about the movies you watched!
          </div>
        </div>


      </div>


    </div>
  );

}

export default AuthenticatedHomePage;