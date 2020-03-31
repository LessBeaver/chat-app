import React from 'react';
import App from '../App';
import './style.css';

const avatar = 'https://zupimages.net/up/20/14/w39m.png'

function Contact() {
    const Online = true;
    return (
        <div className="Contact">
            <img src={avatar} className="avatar">
            </img>
            <div className="status">
                <h4 className="name">Leslie Rouzier</h4>
                <p className="status-online"></p>
                <p>{Online ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    )
};

export default Contact;