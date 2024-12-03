import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Styles/Player.css";
export default function PlayerScreen() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
              },
            });
            const data = await response.json();
            setMovie(data);
            setLoading(false);
            console.log("Movies data: ", data);
          } catch (error) {
            console.error("Error fetching movies: ", error);
            setError("Error Getting Movie");
          }
        }
    fetchMovieDetails();
  }, [id, API_KEY]);


  return (
    <div className="body">
    {!Loading?
    <div className="Loaded">
      <section className="Player">

      </section>
      <section className="Movie-Details">
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          alt={movie.title || movie.name}
        />
        <section className="Details">
            <div><h1>{movie.title || movie.name} </h1></div>
            <section className="genres">
            {
                movie.genres.map((genre)=>
                <p key={genre.id}>{genre.name}&nbsp;&nbsp;</p>
                )
            }</section>
            <p>Language: {movie.original_language}</p>
            <p>{movie.status}: {movie.release_date}</p>
            <p>Rating: {movie.vote_average.toFixed(1)}</p>
            <p>Description: {movie.overview}</p>

        </section>
      </section>
    </div>:
    <div className="LoadingError"> {!error?
    <p>Loading...</p>
    :
    <p>{error}</p>
    }</div>}
    </div>
  );
}

