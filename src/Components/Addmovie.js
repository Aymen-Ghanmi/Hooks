import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const Addmovie = ({add}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [title, setTitle ]=useState('')

    const handletitle = (e) =>{
        setTitle(e.target.value)
    }

    const [description, setDescription]=useState('')

    const handleDescription = (e) =>{
        setDescription(e.target.value)
    }


    const [rate, setrate ]=useState(0)

    const handlerate = (e) =>{
        setrate(e.target.value)
    }


    const [posterUrl, setPosterUrl ]=useState('')

    const handleposterUrl = (e) =>{
        setPosterUrl(e.target.value)
    }


    const handleadd =()=>{
      const neWmovie={title, description,rate,posterUrl}
      add (neWmovie)
      handleClose()
    }

  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
         <Button variant="primary" onClick={handleShow}>
         Add New Movie
         </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
            <Form.Control type='text' placeholder='enter title' onChange={handletitle} />
            <Form.Control type='text' placeholder='enter description' onChange={handleDescription} />
            <Form.Control type='number' placeholder='enter rate' onChange={handlerate} />
            <Form.Control type='text' placeholder='enter poster url' onChange={handleposterUrl} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleadd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    

    </div>
  )
}

export default Addmovie