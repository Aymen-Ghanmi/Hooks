
import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import { moviesData } from './Data';
import Navigation from './Components/Navigation/Navigation';
import Addmovie from './Components/Addmovie';
import Filtermovie from './Components/Filtermovie';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';



function App() {
  console.log(moviesData)
  const [movies, setMovies]=useState(moviesData)

 
  const [filtermov,setFiltermov]= useState('')
  console.log(filtermov)

  const [newrate,setNewrate]=useState(0)
  console.log(newrate)
  
 
  
  function addmovie (newmovie){
    setMovies([...movies,newmovie])
  }
  
 
  

  return (
    <div  className="App">
   <Navigation setFiltermov={setFiltermov} setNewrate={setNewrate} newrate={newrate} filtermov={filtermov}  />
 



   <Addmovie add={addmovie} />
   <Filtermovie setFiltermov={setFiltermov} setNewrate={setNewrate} newrate={newrate} filtermov={filtermov}/>
   
   
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/movies' element={<MovieList movies={movies} filtermov={filtermov} newrate={newrate}  />}/>
    <Route path='/movies/:id'  element={ <MovieDetails /> } />
   </Routes>

  
   
   
    </div>
  );
}

export default App;
