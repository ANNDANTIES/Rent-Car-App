import React, { useEffect, useState } from 'react';
import { showAddDetails } from '../services/allAPI';
import { Card, Button } from 'react-bootstrap';

const View = () => {
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

    useEffect(() => {
        displayDetails(); // Invoke the function here
    }, []); // Dependency array ensures it runs once on component mount

    return (
        <>
           <div className='container'>
                <div className="row">
                    {showresult.length > 0 ? (
                        showresult.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
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
                                        <Button variant="primary">View More</Button>
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
