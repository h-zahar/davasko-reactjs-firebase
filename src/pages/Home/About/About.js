import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <div className="d-flex flex-wrap justify-content-center" style={{borderTop: '1px solid black', paddingTop: '120px', marginTop: '120px', marginBottom: '150px'}}>
                    <div style={{maxWidth: '400px'}} className="mx-2">
                        <img className="w-100" style={{height: '100%'}} src="https://i.ibb.co/zrCMrP2/1.jpg" alt="" />
                    </div>
                    <div style={{maxWidth: '400px', minWidth: '280px', backgroundColor: 'rgba(255, 255, 255, 0.35)'}} className="shadow-lg mx-2 rounded">
                        <div className="mx-4 my-3">
                            <h4 className="text-center my-4">About <span className="brand">Davasko</span></h4>
                            <div>
                                <p className="text-secondary mb-4">
                                Davasko is the first global and leading online travel aggregator. Initially started with the name Travel Booking, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;