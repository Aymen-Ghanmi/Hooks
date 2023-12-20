import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({movies, filtermov, newrate}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between', flexWrap:'wrap' , margin:'15px'}}>
  {
    newrate? 
    movies.filter((movie) => movie.rate === newrate &&   movie.title.toUpperCase().includes(filtermov.toUpperCase()))
    .map((movie)=> <MovieCard movie={movie} key={movie.id}  />)
    :
    movies.filter( (movie) => movie.title.toUpperCase().includes(filtermov.toUpperCase()) ? (movie) => movie.title.toUpperCase().includes(filtermov.toUpperCase().trim()) : movie.description.toUpperCase().includes(filtermov.toUpperCase().trim()))
    .map((movie)=> <MovieCard movie={movie} key={movie.id}  />)
  }
  
    </div>
  )
}

export default MovieList