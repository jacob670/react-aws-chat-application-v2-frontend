import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/AuthenticatedPages/RecommendedMovies.css';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';

const RecommendedMovie = () => {
    const [movieID, setMovieID] = useState('');
    const [mes, setMes] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setMovieID(e.target.value);
      };
    
      const handleSearch = async () => {
        console.log("Movie Name for Recommendations:", movieID); 

        try {
            const response = await axios.post('http://localhost:8083/api/movie/fetchMovieId', 
                { queryString: movieID },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            localStorage.setItem("movieSearchID", response.data);
            navigate('/GetAllRecommendedMovies')
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };
    

    return (
        <div class='rec-container'>

            <div class='header'>
                <Link to="/quickChats" class='trending-movie-title-link'>
                    <h1>Movie Recommendations!</h1>
                </Link>
            </div>

            <div class='dir'>
                <p>Just enter a movie that is similar to what you want to watch!</p>
                <input class="input" name="text" placeholder="Search..." type="search" value={movieID} onChange={handleChange}/>

                <button type="submit" onClick={handleSearch} >Search For Recommendations!</button>
            </div>

        </div>

    );
}

export default RecommendedMovie;