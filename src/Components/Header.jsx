import React from 'react';
import Navbar from './Navbar';

function Header() {

    return (
        <div id='main'>
        <Navbar/>
        <div className='name'>
        <h1><span>Launch Your App</span> With Confidence And Creativity</h1>
        <p className='details'>We will help you to have control with creativity 
        over your app</p>
        <a href='#' className='cv-btn'>Explore</a>
        
        </div>
        </div>
    )
    
}

export default Header;