import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div style={{backgroundColor: 'white', borderTop: '1px solid black', marginBottom: '50px'}}>
            <Container>
            <Row>
                <h2 className="text-center text-title mt-5 mb-4 py-5">Frequently Asked Questions</h2>
                <Col xs={12} md={6}>
                    <Accordion className="shadow-lg" defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                            
							<span class="fw-bold">How do I book?</span>
											
                            </Accordion.Header>
                            <Accordion.Body>
                            To proceed with a booking please click on the "Book Now" button at the bottom of your quote and submit a booking form. Once we receive this your request will be actioned.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span class="fw-bold">Is it available?</span></Accordion.Header>
                            <Accordion.Body>
                            Due to differing Hotel systems, live availability cannot always be checked at the time of quoting and the time lapse between your quote and booking request can mean a room may be sold. Your booking requests are automatically sent (24 hours a day) to the Hotel or Supplier for confirmation. Final Confirmations on booking requests are generally within 24 hours (up to 48 hours over weekends) Until you have received a confirmation of your booking, it is on a request basis and your payment will not be processed until final confirmations are received.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                            
							<span class="fw-bold">When will my credit card be charged?</span>
											
                            </Accordion.Header>
                            <Accordion.Body>
                            Your card will only be charged if the booking has been confirmed exactly as quoted. If we are unable to confirm your booking as quoted, you will not be charged.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                            
							<span class="fw-bold">What if I need to cancel or amend my booking?</span>
											
                            </Accordion.Header>
                            <Accordion.Body>
                            You'll find a cross button in 'Your Orders' section to cancel.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                </Col>
                <Col xs={12} md={6}>
                    <div className="mt-5 mt-md-0">
                        <img className="w-100" src="https://i.ibb.co/5WZTd8T/photo-1504542982118-59308b40fe0c.jpg" alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default About;