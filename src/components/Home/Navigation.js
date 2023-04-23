import React from 'react';
import './Navigation.css';
import { Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header-bg">
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='ms-3' id="basic-navbar-nav">
                    <Nav className="nav">
                        <Link to="/" className='navlink'>
                            Home
                        </Link>
                        <Link to="/about">About</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/AddReminder">Add Reminder</Link>
                        {
                            user?.email ?
                                <button onClick={logout}>Logout</button>
                                :
                                <Link to="/login" className='navlink' >
                                    Login
                                </Link>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;