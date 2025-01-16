import React, { useState } from 'react'
import { Button, Dropdown, DropdownButton, Form, Modal } from 'react-bootstrap'
import { adddetails } from '../services/allAPI';

import View from './View';
const Rent = () => {
    const [show, setShow] = useState(false);
    const [refeshAddedDetails,setrefeshAddedDetails]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cardetail,setcardetail] = useState({option:"",imgURL:"",videoLink:"",description:""})
   

    const addedDetail=async()=>{
        const {option,imgURL,videoLink,description} =cardetail
        console.log(option);
        console.log(imgURL,videoLink,description);
        if(option && imgURL && videoLink && description) {
            try{
                const savedDetail = await adddetails(cardetail)
                if(savedDetail.status>=200 && savedDetail.status<=300){
                  alert("Car Details Added successfully")
                  setrefeshAddedDetails(!refeshAddedDetails)
                  handleClose()
                  

                }
                else{
                  console.log("api error");
                }
                
            }
            catch(e){
                console.log(e);
            }
        }
        else{
            alert("Please fill the form !!!")
        }

        handleClose();
    }
 
  return (
    <>
        <div className='bg-dark pt-5 d-flex'>
            <h3 className='text-white'>Add Cars To Rent</h3>
            <button onClick={handleShow} className='ms-2 fw-bolder fs-5 border rounded-circle text-white bg-danger p-2'>+</button>
        </div>
        <View setrefeshAddedDetails={setrefeshAddedDetails}/>

        {/* Modal */}
        <Modal
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
            <Form.Label>Select type</Form.Label>
            {/* onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} */}
            <DropdownButton id="dropdown-basic-button" title="Choose Your type of vehicle" onSelect={e=>setcardetail({...cardetail,option:e})}>
                <Dropdown.Item eventKey="Ventage Car">Ventage Cars</Dropdown.Item>
                <Dropdown.Item eventKey="Travel Car">Cars</Dropdown.Item>
                <Dropdown.Item eventKey="teo-wheeler">Two-wheelers</Dropdown.Item>
            </DropdownButton>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Image URL</Form.Label>
              <Form.Control onChange={e=>setcardetail({...cardetail,imgURL:e.target.value})} type="text" placeholder="Image URL" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Youtube videoLink</Form.Label>
              <Form.Control onChange={e=>setcardetail({...cardetail,videoLink:e.target.value})} type="text" placeholder="Video Link" autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={e=>setcardetail({...cardetail,description:e.target.value})}  as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addedDetail} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Rent