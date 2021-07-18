import React from "react";

function Movie({ title, poster_path, overview, vote_average }) {

    const IMAGE_POSTER = "https://image.tmdb.org/t/p/w1280";

    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return 'green';
        }
        else if (vote >= 6) {
            return 'orange';
        }
        else {
            return 'red';
        }
    }

    return (
        <div className="movie">
            <img src={(poster_path ? IMAGE_POSTER + poster_path : 'https://images.unsplash.com/photo-1548095115-45697e222a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;
