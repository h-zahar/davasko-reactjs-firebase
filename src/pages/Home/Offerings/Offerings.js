import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Offer from '../Offer/Offer';

const Offerings = () => {
    const [offering, setOffering] = useState([]);

    useEffect(() => {
        fetch('https://morning-ridge-69827.herokuapp.com/offerings')
        .then(res => res.json())
        .then(data => setOffering(data))
    }, []);

    return (
        <div>
        {
            !offering?.length ?
            <div className="d-flex justify-content-center mt-4"><Spinner animation="border" /></div> :
            <div className="mt-5 py-5">
            <h2 className="text-center mb-5">Our Offerings</h2>
            <Container>
                <Row className="d-flex justify-content-center g-3">
                    {
                    offering.map(offer => {
                        return <Offer key={offer._id} offer={offer} />
                    })
                }
                </Row>
            </Container>
        </div>
        }
        </div>
    )
}

export default Offerings;