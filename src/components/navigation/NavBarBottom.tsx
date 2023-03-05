import React from 'react';
import {Link} from 'react-router-dom';
import pots from './icons/coins-green.png';
import expenses from './icons/expenses-green.png';
import analytics from './icons/analytics-green.png';
import advice from './icons/good-green.png';

const NavBarBottom = () => {
    return (
        <div className='outer-container'>
            <div className='navbar-container'>
                <div className='pots-container-icon'>
                    <img src={pots} width='100'/>
                    <Link id='pots' to="/pots" className='link-2'>Pots</Link>
                </div>
                <div className='expenses-container-icon'>
                    <img src={expenses} width='100'/>
                    <Link id='expenses' to="/expenses" className='link-2'>Expenses</Link>
                </div>
                <div className='analytics-container-icon'>
                <img src={analytics} width='100'/>
                <Link id='analytics' to="/analytics" className='link-2'>Analytics</Link>
                </div>
                <div className='advice-container-icon'>
                    <img src={advice} width='100'/>
                    <Link id='advice' to="/advice" className='link-2'>Advice</Link>
                </div>
            </div>
        </div>
    )
}


export default NavBarBottom;