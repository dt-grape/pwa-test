import React from 'react';

import eagle from "../images/eagle.png"

const Footer = () => {
    return (
        <footer className="footer">
            <img src={eagle} alt="" className="eagle-image"/>
            <div className="footer-info">
                <span>PROPERTY OF LOS ANGELES</span>
                <span>POLICE DEPT/DETECTION UNIT</span>
            </div>
            <img src={eagle} alt="" className="eagle-image"/>

            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
        </footer>
    );
};

export default Footer;