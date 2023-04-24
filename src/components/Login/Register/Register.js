import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../Login/Login.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert(`Your password didn't match`);
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        e.preventDefault();
    }

    return (
        <div>
            <h1 className='text-center'>Register</h1>
            {!isLoading && <form onSubmit={handleLoginSubmit} className='login-form' >
                <input
                    type="text"
                    placeholder='Your Name'
                    name='name'
                    onBlur={handleOnBlur}
                />
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
                <input
                    type="password"
                    placeholder='Confirm Password'
                    name='password2'
                    onBlur={handleOnBlur}
                />

                <button type="submit" className='submit-btn'>Register</button>
                <Link style={{ textDecoration: 'none', fontSize: '16px', marginTop: '10px' }} to="/login" >
                    Already registered? Please Login
                </Link>
            </form>}

            {user?.email && <Alert style={{ width: '30%', margin: '0 auto', fontSize: '18px' }} variant="success">
                User created successfully
            </Alert>}
            {authError && <Alert style={{ width: '30%', margin: '0 auto', fontSize: '18px' }} variant="danger">
                {authError}
            </Alert>}
        </div>
    );
};

export default Register;