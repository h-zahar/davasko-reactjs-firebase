import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div style={{background: `rgba(0, 0, 0, 0.5) url(${'./images/banner/3.jpg'}) center center fixed`, backgroundSize: 'cover', height: '505px'}}>
                <div style={{background: 'rgba(0, 0, 0, 0.5)', height: '100%'}} className="d-flex justify-content-center align-items-center">
                   <div style={{background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(0, 0, 0, 0.3)', boxShadow: '1px 1px 5px black'}} className="py-4 px-5 rounded">
                       <div className="text-center text-light py-3 px-4">
                            <p>So wanna be free like Vasco Da Gama?</p>
                            <h1>Welcoming in <span className="brand">Davasko</span></h1>
                            <p className="mt-3 brand">Your Customized Travel Agency</p>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;