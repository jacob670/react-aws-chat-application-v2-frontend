import React, { useState, useEffect, useCallback } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserName } from './userService';

import './css/AuthenticatedPages/TrendingMovies.css';
import { fetchPopularMovies } from '../service/tmdbService'
import axios from 'axios';

const ChatRoom = () => {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://lnqe826bld.execute-api.us-east-2.amazonaws.com/dev/trendingMovies', {
      method: 'GET'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(jsonData => {
      setMovies(jsonData.results);
    })
    .catch(error => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });


  }, []);

  return (
    <div className='trending-movie-container'>

      <div class='trending-movie-title'>
        <Link to="/quickChats" class='trending-movie-title-link'>
          <h2>Trending Movies</h2>
        </Link>
      </div>

      <div class='page-info'>
        <p>Want to get more information on a movie? Just click on the title! Make sure you scroll down!</p>
      </div>

      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={movie.id} className="movie-item">



            <div class='trending-movie-tit'>
            <Link to={`/trendingMovies/${movie.id}`}>
            <p> {index + 1}) {movie.title}</p>
            </Link>
            </div>

          </div>
        ))}
      </div>
    </div>

  );
};

export default ChatRoom;
