import React from 'react';
import {Link} from 'react-router-dom';


const NavBarBottom = () => {
    return (
        <div className='outer-container'>
            <div className='navbar-container'>
                <Link id='pots' to="/pots">Pots</Link>
                <Link id='expenses' to="/expenses">Expenses</Link>
                <Link id='analytics' to="/analytics">Analytics</Link>
                <Link id='advice' to="/advice">Advice</Link>
            </div>
        </div>
    )
}


export default NavBarBottom;