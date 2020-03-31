import React from 'react';
import App from '../App';

const avatar = 'https://zupimages.net/up/20/14/w39m.png'

function Contact() {
    const Online = true;
    const element = (
        <div className="Contact">
            <img src={avatar} className="avatar">
            </img>
            <div>
                <h4 className="name">Leslie Rouzier</h4>
                <div className="status">
                    <p className="status-online"></p>
                    <p>{online ? 'Online' : 'Offline'}</p>
                </div>
            </div>
        </div>
    )
};

export default App;