import React from 'react';
import {getAllMovies} from "./../data/movies.js"
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    getAllMovies().map(movie=> (
                        <MovieCard key={movie.id} movie={movie}></MovieCard>
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;
