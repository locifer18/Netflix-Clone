import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../axiosInstance';

const Row = (props) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requsts = await axios.get(props.fetchUrl);
            setMovies(requsts.data.results);
            return requsts
        }
        fetchData();
    }, [props.fetchUrl]);
    return (
        <div className='row'>
            <h2 className='row_title'>{props.title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => {
                    return (
                        ((props.isLargeRow && movie.poster_path) ||
                        (!props.isLargeRow && movie.backdrop_path)) && (
                          <img className={`row_poster ${props.isLargeRow && "row_posterLarge"}`} key={movie.id}
                                src={`${baseUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name} />
                        )
                    )
                }
                )
                }
            </div>
        </div>
    );
}

export default Row