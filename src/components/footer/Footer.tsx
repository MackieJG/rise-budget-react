import React from 'react';
import twitter from './twitter-icon.svg';
import linkedin from './linkedin-icon.svg';
import git from './git-icon.svg';
import fb from './fb-icon.svg';

const Footer = () => {

    return (
        <div className='footer-container'>
            <div className='footer-left-container'>
                <div>
                    <p className='rise'>RISE</p>
                    <p className='simple'>Money made simple.</p>
                </div>
                <div>
                    <p className='small-print'>© 2023 RISE Budget App. All rights reserved.</p>
                </div>
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