import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav className="animated fadeInRight">
            <div className="nav-item">
                <div className="nav-item-text">INTRO</div>
                <div className="nav-item-index">01</div>
            </div>
            <div className="nav-item">
                <div className="nav-item-text">APPS</div>
                <div className="nav-item-index">02</div>
            </div>
            <div className="nav-item">
                <div className="nav-item-text">BLOG</div>
                <div className="nav-item-index">03</div>
            </div>
            <div className="nav-item">
                <div className="nav-item-text">CONTACT</div>
                <div className="nav-item-index">04</div>
            </div>
        </nav>
    );
}

export default Nav;
