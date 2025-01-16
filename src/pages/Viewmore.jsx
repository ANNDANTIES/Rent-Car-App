import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { showViewMore } from '../services/allAPI';
import { Button, Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import { updation } from '../services/allAPI';
import { Form } from 'react-bootstrap';


const Viewmore = () => {
    const { id } = useParams();  // Get the item id from the URL
    const [itemDetails, setItemDetails] = useState(null);
    const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [updatecardetail, setupdatecardetail] = useState({
        option: "",
        imgURL: "",
        videoLink: "",
        description: ""
    });
    const fetchItemDetails = async () => {
        try {
            const response = await showViewMore(id);
            setItemDetails(response.data);
            setupdatecardetail({
                option: response.data.option,
                imgURL: response.data.imgURL,
                videoLink: response.data.videoLink,
                description: response.data.description
            });
        } catch (error) {
            console.error('Error fetching item details:', error);
        }
    };

    useEffect(() => {
        // Fetch item details based on the ID

        fetchItemDetails();
    }, [id]);

    if (!itemDetails) {
        return <div>Loading...</div>;
    }

    const addedDetail = async () => {
        const { option, imgURL, videoLink, description } = updatecardetail;
        if (option && imgURL && videoLink && description) {
            try {
                const savedDetail = await updation(id, updatecardetail);
                if (savedDetail.status >= 200 && savedDetail.status <= 300) {
                    alert("Car Details Added successfully");
                    handleClose();
                    showViewMore(id);
                } else {
                    console.log("API error");
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            alert("Please fill the form !!!");
        }
    };

    return (
        <>
            <div className="container text-center">
                <h2>{itemDetails.option}</h2>
                <img className="border rounded" src={itemDetails.imgURL} alt={itemDetails.option} />
                <p className="fs-5 fw-bolder text-danger">{itemDetails.description}</p>
                <button onClick={handleShow} className="btn btn-primary">Update Details</button>
                <a href={itemDetails.videoLink} className="ms-2 text-decoration-none" target="_blank" rel="noopener noreferrer">Watch Video</a>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Vehicle Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Select type</Form.Label>
                            <DropdownButton id="dropdown-basic-button" title={updatecardetail.option || "Choose Your type of vehicle"} onSelect={e => setupdatecardetail({ ...updatecardetail, option: e })}>
                                <Dropdown.Item eventKey="Ventage Car">Ventage Cars</Dropdown.Item>
                                <Dropdown.Item eventKey="Travel Car">Cars</Dropdown.Item>
                                <Dropdown.Item eventKey="two-wheeler">Two-wheelers</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Image URL"
                                value={updatecardetail.imgURL}
                                onChange={e => setupdatecardetail({ ...updatecardetail, imgURL: e.target.value })}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Youtube videoLink</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Video Link"
                                value={updatecardetail.videoLink}
                                onChange={e => setupdatecardetail({ ...updatecardetail, videoLink: e.target.value })}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={updatecardetail.description}
                                onChange={e => setupdatecardetail({ ...updatecardetail, description: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Discard
                    </Button>
                    <Button onClick={addedDetail} variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Viewmore;
