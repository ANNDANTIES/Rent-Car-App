import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
        <div className='bg-danger' style={{height:"80px",width:"100%"}}>
            <div className='d-flex justify-content-around pt-3'>
            <div className='d-flex justify-content-evenly'>
                    <h3 className='text-white ms-3'>Welcome To Rent A car</h3>
                    <i className="fa-solid fa-car text-white mt-3 ms-2"></i>
            </div>
            <div>
                <button className='btn btn-light'><Link style={{ textDecoration: 'none', color: 'red' }} to={'/rent'}>To Rent</Link></button>
                {/* <button></button> */}
            </div>
            </div>
        </div>
        {/*details  */}
        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h3>Rent A CAR</h3>
                <p>
                    Rentalcars.com is a trading name of Booking.com Transport Limited which is a limited company registered in England and Wales 
                    (Number: 05179829) whose registered address is at 6 Goods Yard Street, Manchester, M3 3BG, United Kingdom. 
                    VAT number: GB 855349007.
                </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img
                    width="100%"
                    className="img-fluid"
                    src="https://www.enterprise.com/en/car-rental/rent-a-car-after-an-accident/who-pays/_jcr_content/root/container/container/container_1066138387/teaser_copy_copy_cop.coreimg.82.1920.jpeg/1708383900016/header-who-pays.jpeg"
                    alt="Car rental"
                />
            </div>
        </div>
    </div>
    {/* Features */}
    <div className='container mt-5'>
    <h1 className='text-center fw-bolder'>Features</h1>
    <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="200px" src="https://static.wixstatic.com/media/b5f065_88993b4015944b3c98dae6be48326365.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b5f065_88993b4015944b3c98dae6be48326365.jpg" />
            <Card.Body>
                <Card.Title>Vintage Cars</Card.Title>
                <Card.Text>
                Vintage Cars for wedding or events
                </Card.Text>
                <Button variant="primary">View More</Button>
            </Card.Body>
        </Card>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="200px"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7AlGgnXDU6UaaWxSVSZMztUaXtpTC3D39A&s" />
            <Card.Body>
                <Card.Title>Tour Travels</Card.Title>
                <Card.Text>
                For long travels and family tours
                </Card.Text>
                <Button variant="primary">View More</Button>
            </Card.Body>
        </Card>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="176px" src="https://images.hindustantimes.com/auto/img/2020/05/22/600x338/Bounce_1574085727214_1590120695598.jpg" />
            <Card.Body>
                <Card.Title>Short Trips</Card.Title>
                <Card.Text>
                For short trips and friends gathering
                </Card.Text>
                <Button variant="primary">View More</Button>
            </Card.Body>
        </Card>
        </div>
    </div>

    </div>
    </>
  )
}

export default Landing