import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllRecommendedMovies = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // write api in java to parse and call this aws api to clean the data. then this page will call the java api and display the clean data. to much issues

        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://lnqe826bld.execute-api.us-east-2.amazonaws.com/dev/recommendedMovies', {
                    params: {
                        movieId: localStorage.getItem("movieSearchID")
                    },
                });

                const data = response.data
                console.log(data);
                setMovies(data.movies); // parse the body since it's a string
                
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
        <h1>h</h1>
     
    //     <div>
    //     {movies.map((movie, index) => (
    //         <div key={index}>
    //             <h3>{movie.title}</h3>
    //             <p>{movie.year}</p>
    //         </div>
    //     ))}
    // </div>
    );
};


export default AllRecommendedMovies;