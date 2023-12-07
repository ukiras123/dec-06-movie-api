
import React, { useState } from 'react'

import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';

function App() {
  const [movieList, setMovieList] = useState([])

  const removeFromMovieList = (movie) => {
    console.log("I am removing....", movie)
    const updatedMovie = movieList.filter(mov => mov.imdbID !== movie.imdbID);
    setMovieList(updatedMovie)
  }
  const addMovieToList = (movie, choice) => {
    const movieWithChoice = { ...movie, choice }
    setMovieList([...movieList, movieWithChoice])
  }

  // 1 Remove from movielist
  return (<>
    <div className="wrapper bg-dark text-warning">
      <Container>
        <Row>
          <Col className='text-center mt-3'>
            <h1>My Movie API App</h1>
            <hr />
          </Col>
        </Row>
        {/* Search Form */}
        <SearchForm addMovieToList={addMovieToList} />
        {/* Movie List */}
        <MovieList movieList={movieList} removeFromMovieList={removeFromMovieList} />
        {/* <MovieList movieList={movieList} removeFromlist={} /> */}

      </Container>
    </div>
  </>
  )
}

export default App;