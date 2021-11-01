import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div style={{height: '48vh'}} className="d-flex justify-content-center align-items-center">
                <div>
                    <h2 className="text-center text-danger">404 Not Found</h2>
                    <div className="text-center mt-3">
                        <Link to="/">Back to Home?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;