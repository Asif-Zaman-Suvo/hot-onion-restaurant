import React, { useContext } from 'react';
import { Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { CartContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import './Foods.css';



const breakfast = fakeData.filter(foods => foods.type === 'Breakfast')
const lunch = fakeData.filter(foods => foods.type === 'Lunch')
const dinner = fakeData.filter(foods => foods.type === 'Dinner')

const Foods = () => {
    const [cart] = useContext(CartContext);


    const newFood = type => {
        return (

            type.map(food =>



                <Col className='my-3' md={4}>

                    <Card style={{ width: '18rem', height: '100%' }}>
                        <Card.Img variant="top" className=" mx-auto p-2  w-50" src={food.images} />
                        <Card.Body className='justify-content-center'>
                            <Card.Title><h1>{food.name}</h1></Card.Title>
                            <Card.Text>
                                <h5>{food.shortDescription}</h5>
                                <h6>$ {food.price}</h6>

                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>








            )
        )
    }




    return (
        <Container>
            <Tabs className='mt-4 justify-content-center border-0' defaultActiveKey="Breakfast" transition={false} id="noanim-tab-example">


                <Tab eventKey="Breakfast" title="Breakfast">
                    <Row className='mt-3 ' >


                        {newFood(breakfast)}


                    </Row>

                </Tab>
                <Tab eventKey="Lunch" title="Lunch">
                    <Row className='mt-3'>

                        {newFood(lunch)}


                    </Row>

                </Tab>
                <Tab eventKey="Dinner" title="Dinner">
                    <Row className='mt-3 '>


                        {newFood(dinner)}



                    </Row>

                </Tab>
            </Tabs>
        </Container>

    );
};

export default Foods;


