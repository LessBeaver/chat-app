import React from 'react';
import App from '../App';
import './style.css';


function Contact() {

const avatar = 'https://zupimages.net/up/20/14/w39m.png'
const Online = true;
const connect = Online ? 'status-online' : 'status-offline';

    return (
        <div className="Contact">
            <img src={avatar} className="avatar"></img>
            <div>
                <h4 className="name">Leslie Rouzier</h4>
                <div className="status">
                    <span className={connect}></span>
                    <p className="status-text">{Online == true? 'Online' : 'Offline'}</p>
                </div>
            </div>
        </div>
    )
};

export default Contact;