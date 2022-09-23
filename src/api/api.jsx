import axios from "axios";

const DEFAULT_URL = 'https://api.themoviedb.org/3'
const BY_TRENDS = `${DEFAULT_URL}/trending/movie/week`;
const BY_SEARCH = `${DEFAULT_URL}/search/movie`;
const BY_ID = `${DEFAULT_URL}/movie/`;
const API_KEY = '67626f3081747adbd3e1031c2fe6d873';
const poster = 'https://image.tmdb.org/t/p/w500'

async function getTrendMoviese(page = 1) {
    try {
        const { data } = await axios.get(
            `${BY_TRENDS}?api_key=${API_KEY}&page=${page}&language=en`
        )
        return (data.results);
    } catch (error) {
    }
};
async function fetchBySearchMovies(formInput, page = 1) {
    try {
        const { data } = await axios.get(
            `${BY_SEARCH}?api_key=${API_KEY}&query=${formInput}&page=${page}`
        );
        return data.results;
    } catch (error) { }
}

async function fetchByID(id) {
    try {
        const { data } = await axios.get(`${BY_ID}${id}?api_key=${API_KEY}`);
        console.log(data)
        return data;

    } catch (error) { }
}

async function fetchCredits(id) {
    try {
        const { data } = await axios.get(`${BY_ID}${id}/credits?api_key=${API_KEY}`);
        return data.cast;
    } catch (error) {

    }
}

async function fetchReviews(id) {
    try {
        const { data } = await axios.get(`${BY_ID}${id}/reviews?api_key=${API_KEY}`);
        return data.results;
    } catch (error) {

    }
}

export { getTrendMoviese, fetchBySearchMovies, fetchByID, poster, fetchCredits, fetchReviews };

