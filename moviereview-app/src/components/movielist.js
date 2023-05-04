import React from 'react';
import Stars from './stars';

const MovieList = (props) => {
    return (
        <>
            <h2>John Wick Movie Rater</h2>
            {props.movies.map((movie,index) => (
                <><div className='d-flex justify-content-start m-5'>
                    <img src={movie.Poster} alt='movie'></img>
                    <div className='Stars'>
                        <Stars/>
                    </div>
                </div>
                
                <div className='movie-title'>
                        <p>Film Name: {movie.Title}</p>  
                        <p>Year released: {movie.Year}</p>
                </div></>
            )
            
            
            )}
        
        
        </>
    );
};

export default MovieList;