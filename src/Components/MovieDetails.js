import React, { useEffect, useState } from 'react'
import { moviesData } from '../Data'
import { Button, Card, Spinner } from 'react-bootstrap'
import MovieList from './MovieList'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

const MovieDetails = () => {
    const {id} = useParams() 

    const [movie, setMovie] = useState({})
    
    const navigate = useNavigate()
    
    const [loading, setLoading]=useState(true)

    

    useEffect(() => {
        const foundMovie = moviesData.find((el=> el.id === Number(id)))
        setMovie(foundMovie)
        setInterval(() => {
            setLoading(false)
        }, 2000);
      
    }, [id])
    

  return (
    <div>
         {loading ?  <Spinner animation="border" variant="success" /> : <> 
        <Card style={{ width: '18rem',margin:'10px',height:'700px' }}>
        
        <Card.Img style={{height:'370px',width:'18rem'}} variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text style={{height:'170px'}}>
          {movie.description}
          </Card.Text>
          <div style={{width:'250px', height:'150px', display:'flex', justifyContent:'center'}}> 
          
          <a href={movie.trailer} target='_blank' >Trailer</a>
          <Button onClick={()=> navigate(-1)} >Back</Button>
          <ReactStars count={5} value={movie.rate} half={false} edit={false}  size={24} color2={'#ffd700'} /> </div>
          
         
        </Card.Body>
      </Card> </> }
    </div>
  )
}

export default MovieDetails