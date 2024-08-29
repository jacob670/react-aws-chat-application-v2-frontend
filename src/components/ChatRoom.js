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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getMovies();
  }, []);

  return (
    <h1>page</h1>
  );
};

export default ChatRoom;
