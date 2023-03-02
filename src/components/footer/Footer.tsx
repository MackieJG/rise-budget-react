import React from 'react';
import twitter from './twitter-icon.svg';
import linkedin from './linkedin-icon.svg';
import git from './git-icon.svg';
import fb from './fb-icon.svg';

const Footer = () => {

    return (
        <div className='footer-container'>
            <div className='footer-left-container'>
                <h5>RISE</h5>
                <h6>Money made simple.</h6>
            </div>
            <div className='footer-right-container'>
                <img src={twitter} width='20'/> 
                <img src={linkedin} width='20'/>
                <img src={git} width='20'/>
                <img src={fb} width='20'/>
            </div>
        </div>
    )
}

export default Footer;