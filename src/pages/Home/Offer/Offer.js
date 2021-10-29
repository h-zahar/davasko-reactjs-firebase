import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Offer.css';

const Offer = (props) => {
    const {name, img_i, short_description} = props.offer;
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <div className="d-flex justify-content-center">
                <Card className="custom-card" style={{ width: '18rem' }}>
                    <Card.Img style={{height: '178px'}} variant="top" src={img_i} />
                    <Card.Body>
                    <Card.Title className="my-2">{name}</Card.Title>
                    <Card.Text className="my-3" style={{height: '100px'}}>
                        {short_description}
                    </Card.Text>
                    <div className="mt-4 mb-3 d-flex justify-content-center">
                        <Button className="btn-custom">Book Now</Button>
                    </div>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default Offer;