import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-5 py-5">
                <div style={{backgroundColor: 'rgba(100, 20, 10, 0.7)', boxShadow: '1px 1px 7px rgba(0, 0, 0, 1)', maxWidth: '400px', minWidth: '280px'}} className="p-5 rounded">
                    <h4>Login with Google</h4>
                    <div className="d-flex justify-content-center mt-3">
                        <button>Tap</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;