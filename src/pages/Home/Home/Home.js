import React from 'react';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import './Home.css';

const Home = () => {
    return (
        <div className="bg-home">
            <Banner />
            <Offerings />
        </div>
    )
}

export default Home;