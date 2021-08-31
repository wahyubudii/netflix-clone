const API_KEY = '3ff63c1282b2519c745df2594fb3c9a2';
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fecthTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fecthActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fecthComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fecthHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fecthRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fecthDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;