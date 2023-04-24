import React from 'react';
import './Navigation.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header-bg">
            <div class="navbar">

                <ul>
                    <li><Link to="/AddReminder">Add Reminder</Link></li>
                    <li><Link to="/UserReminders">My Reminders</Link></li>
                </ul>

                <ul>
                    {user?.email ?
                        <>
                            <li><button className='logout-btn' onClick={logout}>Logout</button></li>
                            <li><h3>{user?.displayName}</h3></li>
                        </> :
                        <li><Link to="/login" >
                            Login
                        </Link></li>}
                </ul>

            </div>

        </div>
    );
};

export default Navigation;