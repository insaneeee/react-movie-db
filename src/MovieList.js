import React from 'react';
import Button from '@material-ui/core/Button';
import MovieItem from './MovieItem';
import styles from './MovieList.css';

function MovieList() {
    return (
        <div className="movie-list">
            <div className="movies-container">
            <MovieItem title="Independence Day"
                        year="1996"
                        description="The aliens..." />
            </div>
        <Button variant="contained" color="primary">
        Add new movie
        </Button>
        </div>
    )
}

export default MovieList;