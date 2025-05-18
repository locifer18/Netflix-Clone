import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../axiosInstance'; // Import your Axios instance
import request from '../request';

const Banner = () => {
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const requests = await axios.get(request.fetchNetflixOriginals);
                setMovie(
                    requests.data.results[Math.floor(Math.random() * requests.data.results.length)]
                );
            } catch (error) {
                console.error("Error fetching data:", error);
                setMovie(null);
            }
        }
        fetchData();
    }, []);

    return (
        <header className='banner' style={{
            backgroundImage: movie?.backdrop_path 
                ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
                : `url("https://w0.peakpx.com/wallpaper/166/945/HD-wallpaper-twitch-banner-black-banner.jpg")`, // Fallback image
        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie ? movie.name : "Movie Name"}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h2 className='banner_description'>
                    {movie ? truncate(movie.overview, 150) : "this is for test desc"}
                </h2>
            </div>
            <div className='banner--fadeBottom' />
        </header>
    );
}

export default Banner;