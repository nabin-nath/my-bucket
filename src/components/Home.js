import React, { useEffect, useState } from "react";
import Movie from "../components/Movie.jsx";
import Loading from "../components/Loading";


function Home() {


    const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?sort_by_popularity.desc&api_key=d0c3afe69acdc83100011b973dc1865b&page=1";
    const MOVIE_API_1 = "https://api.themoviedb.org/3/discover/movie?sort_by_popularity.desc&api_key=d0c3afe69acdc83100011b973dc1865b&page=2";
    const MOVIE_API_2 = "https://api.themoviedb.org/3/discover/movie?sort_by_popularity.desc&api_key=d0c3afe69acdc83100011b973dc1865b&page=3";
    const MOVIE_API_3 = "https://api.themoviedb.org/3/discover/movie?sort_by_popularity.desc&api_key=d0c3afe69acdc83100011b973dc1865b&page=4";
    const MOVIE_API_4 = "https://api.themoviedb.org/3/discover/movie?sort_by_popularity.desc&api_key=d0c3afe69acdc83100011b973dc1865b&page=5";

    const [movies, setMovies] = useState([]);
    const [ispending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => {
                if (!res.ok) {
                    throw Error('could not fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setMovies(prevVal => [...prevVal, ...data.results]);
                setIsPending(false);
                // setError(null);

            })
            .catch(err => {
                setIsPending(false);
                // setError(err.message);
            });

    }

    useEffect(() => {
        getMovies(MOVIE_API)
        getMovies(MOVIE_API_1)
        getMovies(MOVIE_API_2)
        getMovies(MOVIE_API_3)
        getMovies(MOVIE_API_4)
    }, []);

    return (
        <div>
            {/* <form onSubmit={searchData}>
                <header>
                    <h2>Moive Database</h2>
                    <input onChange={search} className="search" type="text" placeholder="Search..." value={searchTerm}></input>
                </header>
                {error && <h1 className={"textcenter"}>{error}</h1>}
                {ispending && <Loading />}
            </form> */}
            {ispending && <Loading />}
            <div className="App">
                {console.log(movies)}
                {movies.length > 0 && movies.map((data, index) => <Movie key={data.id} {...data} home={true} index={index} />)}
            </div>
        </div>
    );
}

export default Home;
