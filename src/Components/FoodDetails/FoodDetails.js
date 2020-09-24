import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import fakeData from '../../fakeData/fakeData';



const FoodDetails = () => {

    const {foodName}=useParams()
    const foodDetails = fakeData.find(fd=>fd.name === foodName)

   
   
   

    return (
        <Container>
        <Row className='align-items-center justify-content-center'>
            <Col md={6} className="text-left">

                
                <h2>{ foodDetails.name}</h2>
                <p>{ foodDetails.fullDescription}</p>
                <h3>$ {foodDetails.price}</h3>

            </Col>

            <Col md={6}>

                <img src={foodDetails.images} className="w-100 mt-5" alt=""/>

            </Col>



        </Row>

    </Container>

        
       
    );
};

export default FoodDetails;