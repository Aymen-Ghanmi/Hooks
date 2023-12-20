import React from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactStars from 'react-stars'

const Filtermovie = ({setFiltermov,setNewrate,newrate ,filtermov}) => {

  const reset = () => {
    setNewrate(0)
    setFiltermov('')
}
    
  return (
    <div style={{display:'flex',justifyContent:'center',width:'400px',marginLeft:'35%', marginTop:'30px'}}>
   <Form.Control style={{width:"300px"}} placeholder='Search your movie ...' onChange={(e) => setFiltermov (e.target.value) } value={filtermov}/> 
        <ReactStars  count={5}  size={24} color2={'#ffd700'} half={false} edit={true} onChange={(rate)=> setNewrate(rate)} value={newrate}  />
        <Button onClick={reset}>Reset</Button>
        
    </div>
  )
}

export default Filtermovie