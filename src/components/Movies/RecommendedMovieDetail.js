import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RecommendedMovieDetail = ({ movies }) => {
  const { id } = useParams();
//   const [movie, setMovie] = useState(null);

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  const movieData = JSON.parse(localStorage.getItem('MovieData')) || [];
  const movie = movieData.find((item) => item.id === Number(id));
  

//   useEffect(() => {

//     const getTrendingMovies = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
//       } catch (error) {
//         console.log('error ', error)
//       }
//     };

//     getTrendingMovies();
//   }, [])

  return (
    <div className="movie-list">

      <div class='specific-tit'>
        <Link to="/GetAllRecommendedMovies" class='trending-movie-title-link'>
          <h1>{movie.title}</h1>
        </Link>

      </div>

      <div class='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '200px', height: 'auto', objectFit: 'cover', textAlign: 'center' }} />
      </div>


      <div className='specific-overview'>
        <p>{movie.overview}</p>
      </div>

      <div className='specific-date'>
        <p>Date Released: {movie.release_date}</p>
      </div>


    </div>

  );
};

export default RecommendedMovieDetail;