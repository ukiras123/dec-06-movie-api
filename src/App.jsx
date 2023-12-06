
import React, { useState } from 'react'

import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';

function App() {

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
        <SearchForm />
        {/* Movie List */}
        <MovieList />
      </Container>
    </div>
  </>
  )
}

export default App;