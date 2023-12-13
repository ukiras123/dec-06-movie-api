import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeMovieFromList } from '../redux/slices/movieSlice'

function MovieList() {
    // { movieList, removeFromMovieList }
    const movieList = useSelector(state => state.movieInfo.movieList)
    const dispatch = useDispatch()
    const [filteredList, setFilteredList] = useState([])

    const removeFromMovieList = (movie) => {
        dispatch(removeMovieFromList(movie))
    }
    useEffect(() => {
        setFilteredList(movieList)
    }, [movieList])

    const filterMovies = (choice) => {
        if (choice === 'all') {
            setFilteredList(movieList);
        } else {
            const updateList = movieList.filter(movie => movie.choice === choice);
            setFilteredList(updateList)
        }
        // TIDI
    }
    return (
        <>
            {movieList && movieList.length > 0 && (
                <>
                    <hr />
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary" onClick={() => filterMovies("all")}>All</Button>
                        <Button variant="success" onClick={() => filterMovies("awesome")}>Awesome</Button>
                        <Button variant="warning" onClick={() => filterMovies("boring")}>Boring</Button>
                    </ButtonGroup>
                    <div className='d-flex flex-wrap gap-3 justify-content-between'>
                        {
                            filteredList.map(movie => {
                                return <MovieCard movie={movie} removeMovie={removeFromMovieList} />
                            })
                        }
                    </div>
                </>
            )
            }
        </>
    )
}

export default MovieList