import axios from 'axios';

const movieBaseURL = 'https://api.themoviedb.org/3';
const api_key = 'API_KEY';
const movideByGenreBaseURL = movieBaseURL + '/discover/movie?api_key=' + api_key + '&with_genres=';


const getTrendingVideos = axios.get(movieBaseURL + '/trending/all/day?api_key=' + api_key);
const getMovieByGenre = (id: number) => axios.get(movideByGenreBaseURL + id);



export default {
    getTrendingVideos,
    getMovieByGenre
}
