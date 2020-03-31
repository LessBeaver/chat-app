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
            <div>
                <h4 className="name">Leslie Rouzier</h4>
                    <span className="status status-text"><p className="status-online"></p>{Online ? 'Online' : 'Offline'}</span>
            </div>
        </div>
    )
};

export default Contact;