import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/AuthenticatedPages/TrendingMovies.css';
const AllRecommendedMovies = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8083/api/movie/fetchRecommendedMovies', {
                    params: {
                        movieId: localStorage.getItem("movieSearchID")
                    },
                });

                const data = response.data;

                localStorage.setItem('MovieData', JSON.stringify(data));
                setMovies(data); 
                
            } catch (error) {
                console.log("error has occured: ", error);
                setErrorMessage("Error has occured. Please direct back to the menu.")
            } finally {
                setLoading(false);
            }
        }
        
        fetchMovies();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div className='trending-movie-container'>

      <div class='trending-movie-title'>
        <Link to="/recomendedMovies" class='trending-movie-title-link'>
          <h2>Recommended Movies</h2>
        </Link>
      </div>

      <div class='page-info'>
        <p>Want to get more information on a movie? Just click on the title! Make sure you scroll down!</p>
      </div>

      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={movie.id} className="movie-item">
            <div class='trending-movie-tit'>
            <Link to={`/GetAllRecommendedMovies/${movie.id}`}>
            <p> {index + 1}) {movie.title}</p>
            </Link>
            </div>

          </div>
        ))}
      </div>
    </div>

    );
};


export default AllRecommendedMovies;