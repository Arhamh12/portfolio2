import React from 'react';
import  logo  from './logo.png';
import './Nav.css'
export default function Nav(){

    return(
        
            <nav>
                <img src={logo} alt="logo" className='Logo'/>
                <div className="options">
                    <a href='#Home' className="option">Home</a>
                    <a href='#Projects' className="option">Projects</a>
                    <a href='#Work' className="option">Experience</a>
                    <a href='#Contact' className="option">Contact</a>
                </div>
            </nav>
        
    )
}