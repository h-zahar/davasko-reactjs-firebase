import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { googleSignIn, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirected_uri = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            setUser(result.user);
            history.push(redirected_uri);
        })
        .finally(() => setIsLoading(false));
    };

    return (
        <div>
            <div className="d-flex justify-content-center my-5 py-5">
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', boxShadow: '1px 1px 7px rgba(0, 0, 0, 1)', maxWidth: '400px', minWidth: '280px'}} className="p-5 rounded">
                    <h4>Login with Google</h4>
                    <div className="d-flex justify-content-center mt-3">
                    <button onClick={handleGoogleSignIn} className="mt-3 btn-google"><i className="fa-brands fa-google" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;