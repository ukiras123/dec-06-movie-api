import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import MovieCard from './MovieCard';

function SearchForm() {

    const [searchValue, setSearchValue] = useState();
    const [movieDetail, setMovieDetail] = useState({
        "Title": "Guardians of the Galaxy Vol. 2",
        "Year": "2017",
        "Rated": "PG-13",
        "Released": "05 May 2017",
        "Runtime": "136 min",
        "Genre": "Action, Adventure, Comedy",
        "Director": "James Gunn",
        "Writer": "James Gunn, Dan Abnett, Andy Lanning",
        "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
        "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "67/100"
            }
        ],
        "Metascore": "67",
        "imdbRating": "7.6",
        "imdbVotes": "741,862",
        "imdbID": "tt3896198",
        "Type": "movie",
        "DVD": "10 Jul 2017",
        "BoxOffice": "$389,813,101",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    })
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("I am submitted")
        console.log(" Now searching movie", searchValue)
        // TODO: Make API call to actually search the movie
    }

    const handleOnChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }
    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Row>
                    <Col className='col-9'>
                        <Form.Control onChange={handleOnChange} required type="text" placeholder="Search by Movie" />
                    </Col>
                    <Col className='col-3 d-grid'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>

                </Row>
            </Form>
            {/* TODO Render the movie detail once it comes from api */}
            {movieDetail && <MovieCard movie={movieDetail} />}
        </div>
    )
}

export default SearchForm