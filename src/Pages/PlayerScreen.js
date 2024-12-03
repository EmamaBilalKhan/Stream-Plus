import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Styles/Player.css";
import ReactPlayer from "react-player";

export default function PlayerScreen() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        const data = await response.json();
        setMovie(data);

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            }
          }
        );
        const videoData = await videoResponse.json();
        const youtubeTrailer = videoData.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );
        if (youtubeTrailer) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${youtubeTrailer.key}`);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie or trailer:", error);
        setError("Error Getting Movie");
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id, API_KEY]);

  return (
    <div className="body">
      {!loading ? (
        <div className="Loaded">
          <section className="Player">
            {trailerUrl ? (
              <ReactPlayer
                url={trailerUrl}
                controls={true}
                width="100%"
                height="100%"
              />
            ) : (
              <p>No Trailer Available</p>
            )}
          </section>
          <section className="Movie-Details">
            {movie && movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
            ) : (
              <p>No Poster Available</p>
            )}
            <section className="Details">
              <h1>{movie?.title || movie?.name}</h1>
              <section className="genres">
                {movie?.genres?.map((genre) => (
                  <p key={genre.id}>{genre.name}&nbsp;&nbsp;</p>
                ))}
              </section>
              <p>Language: {movie?.original_language}</p>
              <p>
                {movie?.status}: {movie?.release_date}
              </p>
              <p>Rating: {movie?.vote_average?.toFixed(1)}</p>
              <p>Description: {movie?.overview}</p>
            </section>
          </section>
        </div>
      ) : (
        <div className="LoadingError">
          {!error ? <p>Loading...</p> : <p>{error}</p>}
        </div>
      )}
    </div>
  );
}
