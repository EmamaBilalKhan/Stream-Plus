const requests = {
  fetchActionMovies: `/discover/movie?include_adult=false&with_genres=28`,
  fetchComedyMovies: `/discover/movie?include_adult=false&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?include_adult=false&with_genres=27`,
  fetchDocumentaries: `/discover/movie?include_adult=false&with_genres=99`,
  fetchNetflixOriginals: `/discover/tv?include_adult=false&with_networks=213`,
  fetchUpComing:`/movie/upcoming`,
  fetchPopular: `/movie/popular`,
  fetchTopRated: `/movie/top_rated`
};
export default requests;
