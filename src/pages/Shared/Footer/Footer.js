import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Footer = () => {
    const {isLoading} = useAuth();
    if(isLoading) {
        return <div></div>
    }

    return (
        <div className="d-flex justify-content-center" style={{backgroundColor: 'black'}}>
            <div className="text-light pt-5 py-2 text-center">
                <h4 className="mb-4">Davasko</h4>
                <h6 className="mb-3">Follow Us</h6>
                <div className="d-flex mb-4 justify-content-center">
                    <div className="mx-2">
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="mx-2">
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div className="mx-2">
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="mx-2">
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <p className="text-secondary">All Rights Reserved &copy; <span>Davasko</span></p>
            </div>
        </div>
    )
}

export default Footer;