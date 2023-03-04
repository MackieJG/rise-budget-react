import React from 'react';
import {Link} from 'react-router-dom';


const NavBarBottom = () => {
    return (
        <div className='outer-container'>
            <div className='navbar-container'>
                <Link id='pots' to="/pots" className='link-2'>Pots</Link>
                <Link id='expenses' to="/expenses" className='link-2'>Expenses</Link>
                <Link id='analytics' to="/analytics" className='link-2'>Analytics</Link>
                <Link id='advice' to="/advice" className='link-2'>Advice</Link>
            </div>
        </div>
    )
}


export default NavBarBottom;