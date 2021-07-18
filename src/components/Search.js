import React, { useState } from 'react'
import Loading from './Loading';
import Movie from './Movie';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [ispending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);


    const MOVIE_SEARCH = "https://api.themoviedb.org/3/search/movie?&api_key=d0c3afe69acdc83100011b973dc1865b&query=";


    const getMovies = (API) => {
        fetch(API)
            .then((res) => {
                if (!res.ok) {
                    throw Error('could not fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setMovies(data.results);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });

    }

    function search(e) {
        setSearchTerm(e.target.value);
    }

    function searchData(e) {

        e.preventDefault();
        if (searchTerm) {

            setIsPending(true);
            setMovies([]);
            // console.log("here am i");
            getMovies(MOVIE_SEARCH + searchTerm);
        }
    }

    return (
        <>
            <div className="App">
                <form onSubmit={searchData}>
                    <input onChange={search} className="search" type="text" placeholder="Search..." value={searchTerm}></input>
                    {error && <h1 className={"textcenter"}>{error}</h1>}
                </form>
            </div>
            <div className="App">
                {movies.length > 0 && movies.map((data, index) => <Movie key={data.id} {...data} home={true} index={index} />)}
            </div>
        </>
    )
}
