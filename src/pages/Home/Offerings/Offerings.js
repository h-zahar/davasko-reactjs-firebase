import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';

const Offerings = () => {
    const [offering, setOffering] = useState([]);

    useEffect(() => {
        fetch('./data-json/offerings.json')
        .then(res => res.json())
        .then(data => setOffering(data));
    }, []);

    return (
        <div className="mt-5 py-5">
            <h2 className="text-center mb-5">Our Offerings</h2>
            <Container>
                <Row className="d-flex justify-content-center g-3">
                    {
                    offering.map(offer => {
                        return <Offer key={offer.img} offer={offer} />
                    })
                }
                </Row>
            </Container>
        </div>
    )
}

export default Offerings;