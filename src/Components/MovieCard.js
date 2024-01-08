
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'



const MovieCard = ({movie}) => {
   
 
  const navigate= useNavigate()
  return (
    <div className='MovieCard'>
        <Card style={{ width: '18rem',margin:'10px',height:'700px' }}>
        
      <Card.Img style={{height:'370px',width:'18rem'}} variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text style={{height:'170px'}}>
        {movie.description}
        </Card.Text>
        <div style={{width:'250px', height:'150px', display:'flex', justifyContent:'center'}}> 
     
        <Button onClick={()=> navigate(`/movies/${movie.id}`)} >more info</Button>
        <ReactStars count={5} value={movie.rate} half={false} edit={false}  size={24} color2={'#ffd700'} /> </div>
        
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard