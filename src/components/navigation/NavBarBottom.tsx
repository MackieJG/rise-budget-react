import React from 'react';
import {Link} from 'react-router-dom';
import pots from './icons/coins-green.png';
import analytics from './icons/analytics-green.png';
import advice from './icons/good-green.png';
import pots1 from './icons/pots1.png';
import expenses1 from './icons/expenses1.png';
import analytics1 from './icons/analytics1.png';
import advice1 from './icons/advice1.png';

const NavBarBottom = () => {
    return (
        <div className='outer-container'>
            <div className='navbar-bottom-container'>

                <div className='icon-container'>
                    <Link id='expenses' to="/expenses" className='link-2'>
                        <img src={expenses1} width='50'/>
                        <p>Expenses</p>
                    </Link>
                </div>

                <div className='icon-container'>
                    <Link id='pots' to="/pots" className='link-2'>
                        <img src={pots1} width='50'/>
                        <p> Pots </p>
                    </Link>
                </div>

                <div className='icon-container'>
                <Link id='analytics' to="/analytics" className='link-2'>
                    <img src={analytics1} width='50'/>
                    <p>Analytics</p>
                </Link>
                </div>

                <div className='icon-container'>
                    <Link id='advice' to="/advice" className='link-2'>
                        <img src={advice1} width='50'/>
                        <p>Advice</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default NavBarBottom;