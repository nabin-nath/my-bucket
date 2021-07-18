import React from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Movie({ title, poster_path, overview, vote_average, home, index, reload }) {

    const IMAGE_POSTER = "https://image.tmdb.org/t/p/w1280";
    const [open, setOpen] = React.useState(false);

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

    function addToBucket(options) {
        console.log(options)
        setOpen(true);

        let bucketObj = []
        let bucket = localStorage.getItem('bucket');
        if (bucket === null) {
            bucketObj = [];
        }
        else {
            bucketObj = JSON.parse(bucket);
        }

        bucketObj.push(options);
        localStorage.setItem('bucket', JSON.stringify(bucketObj));
        console.log(bucketObj);
    }

    function removeFromBucket() {
        setOpen(true);
        let bucketObj = []
        let bucket = localStorage.getItem('bucket');
        if (bucket === null) {
            bucketObj = [];
        }
        else {
            bucketObj = JSON.parse(bucket);
        }

        bucketObj.splice(index, 1);
        localStorage.setItem('bucket', JSON.stringify(bucketObj));
        reload()
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const options = {
        poster_path: poster_path ? IMAGE_POSTER + poster_path : 'https://images.unsplash.com/photo-1548095115-45697e222a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: title,
        vote_average: vote_average,
        overview: overview

    }

    return (
        <div className="movie">
            {home === true ?
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This movie is added to the bucket!
                    </Alert>
                </Snackbar> :
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        This movie is removed from bucket!
                    </Alert>
                </Snackbar>
            }
            <img src={(poster_path ? IMAGE_POSTER + poster_path : 'https://images.unsplash.com/photo-1548095115-45697e222a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>Overview:
                    {home === true ? <span onClick={() => addToBucket(options)}><AddBoxIcon /></span> : <span onClick={() => removeFromBucket()}><RemoveCircleIcon /></span>}
                </h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default Movie;
