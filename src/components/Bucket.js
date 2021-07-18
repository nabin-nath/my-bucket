import React, { useState, useEffect } from 'react'
import Movie from './Movie';

export default function Bucket() {

    const [bucketObj, setBucketObj] = useState([])

    useEffect(() => {
        let bucket = localStorage.getItem('bucket');
        if (bucket === null) {
            setBucketObj([])
        }
        else {
            setBucketObj(JSON.parse(bucket))
        }
    }, [])

    function reload() {
        let bucket = localStorage.getItem('bucket');
        if (bucket === null) {
            setBucketObj([])
        }
        else {
            setBucketObj(JSON.parse(bucket))
        }
    }


    return (
        <div>
            <div className="App">
                {console.log(bucketObj)}
                {bucketObj.length === 0 ? <h1>Your bucket is empty!</h1> : null}
                {bucketObj.length > 0 && bucketObj.map((data, index) => <Movie key={data.id} {...data} home={false} index={index} reload={reload} />)}
            </div>
        </div>
    )
}
