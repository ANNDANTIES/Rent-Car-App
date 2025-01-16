import React, { useEffect, useState } from 'react';
import { showAddDetails } from '../services/allAPI';
import { Card, Button } from 'react-bootstrap';
import { deleteDetails } from '../services/allAPI';
import { Link } from 'react-router-dom';

Link
const View = ({ refreshAddedDetails }) => {
    const [updateeffects,setupdateeffects]=useState(false);
    const [showresult, setShowResult] = useState([]); // Initialize as an array since you are using `.map`
    
    const displayDetails = async () => {
        try {
            const result = await showAddDetails();
            if (result.status >= 200 && result.status < 300) {
                console.log("from API:", result);
                setShowResult(result.data); // Update state with the result
            } else {
                console.log("API error");
            }
        } catch (e) {
            console.log(e);
        }
    };
    const deleteCard = async(id)=>{
        console.log("id",id);
        await deleteDetails(id);
        displayDetails();
    }
    const viewmore = ()=>{

    }
    useEffect(() => {
        displayDetails(); // Invoke the function here
    }, [refreshAddedDetails,updateeffects]); // Dependency array ensures it runs once on component mount

    return (
        <>
           <div className='container mt-5'>
                <div className="row">
                    {showresult.length > 0 ? (
                        showresult.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mt-5">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        height="200px"
                                        src={item.imgURL}
                                    />
                                    <Card.Body>
                                        <Card.Title>{item.option}</Card.Title>
                                        <Card.Text>
                                           {item.description}
                                        </Card.Text>
                                       <div className='d-flex align-items-center justify-content-between p-2'>
                                        <Button><Link style={{ textDecoration: 'none', color: 'white' }} to={`/viewmore/${item.id}`}>View More</Link></Button>
                                        <Button onClick={()=>deleteCard(item.id)} style={{ backgroundColor: 'transparent', border: 'none' }} className='btn'><i className="fa-solid fa-trash text-danger"></i></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p> // Fallback if no data is available
                    )}
                </div>
           </div>
        </>
    );
};

export default View;
