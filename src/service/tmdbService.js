import axios from 'axios';

export const fetchPopularMovies = async () => {
    try {
        const response =  axios.get('https://lnqe826bld.execute-api.us-east-2.amazonaws.com/dev/movie');
        return await (await response).data;
    } 
    catch (error) {
        console.log(error);
    }

}