import axios from 'axios';

export const fetchPopularMovies = async () => {
    try {
        const response =  axios.get('https://lnqe826bld.execute-api.us-east-2.amazonaws.com/dev/movie');
        return response.data.results;
    } 
    catch (error) {
        console.log(error);
    }

}