
import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import { moviesData } from './Data';
import Navigation from './Components/Navigation/Navigation';
import Addmovie from './Components/Addmovie';
import Filtermovie from './Components/Filtermovie';
import { Button } from 'react-bootstrap';
import btn from './btn.css'


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
   
   <MovieList movies={movies} filtermov={filtermov} newrate={newrate}  />
   
   
    </div>
  );
}

export default App;
