import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    return (
        <div>
            <h1>Login</h1>
            {!isLoading && <form onSubmit={handleLoginSubmit} className='login-form' >
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    onBlur={handleOnBlur}
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    onBlur={handleOnBlur}
                />

                <button type="submit" className='submit-btn'>Login</button>
                <Link style={{ textDecoration: 'none', fontSize: '16px', marginTop: '10px' }} to="/register" >
                    New user? Please Register
                </Link>
            </form>}
            <p>-------------------------------</p>

            <button onClick={handleGoogleSignIn} className='submit-btn'>Google Sign In</button>

            {isLoading && <Spinner animation="border" variant="success" />}
            {user?.email && <Alert style={{ width: '30%', margin: '0 auto', fontSize: '18px' }} variant="success">
                User created successfully
            </Alert>}
            {authError && <Alert style={{ width: '30%', margin: '0 auto', fontSize: '18px' }} variant="danger">
                {authError}
            </Alert>}
        </div>
    );
};

export default Login;