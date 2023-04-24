import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center mt-5'>
            <h1>Want to add your reminder?</h1>
            <Link to="/AddReminder" >
                <button className='home-btn'>
                    Please Login First!
                </button>
            </Link>
        </div>
    );
};

export default Home;