import React from 'react';
import {Link} from 'react-router-dom';
import pots from './icons/coins-green.png';
import expenses from './icons/expenses-green.png';
import analytics from './icons/analytics-green.png';
import advice from './icons/good-green.png';

const NavBarBottom = () => {
    return (
        <div className='outer-container'>
            <div className='navbar-bottom-container'>

                <div className='icon-container'>
                    <Link id='pots' to="/pots" className='link-2'>
                        <img src={pots} width='100'/>
                        <p>Pots</p>
                    </Link>
                </div>

                <div className='icon-container'>
                    <Link id='expenses' to="/expenses" className='link-2'>
                        <img src={expenses} width='100'/>
                        <p>Expenses</p>
                    </Link>
                </div>

                <div className='icon-container'>
                <Link id='analytics' to="/analytics" className='link-2'>
                    <img src={analytics} width='100'/>
                    <p>Analytics</p>
                </Link>
                </div>

                <div className='icon-container'>
                    <Link id='advice' to="/advice" className='link-2'>
                        <img src={advice} width='100'/>
                        <p>Advice</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default NavBarBottom;