import react from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

const NavBarTop = () => {

    return (
        <div className='outer-container'>
            <div className='navbar-container'>
                <div className='left-container'>
                    <Link id='home' to ="/">Home</Link>
                    <Link id='expense-form' to="/expenses/add">Add Expense</Link>
                </div>
                <div className='logo'>
                    <Link id='home' to="/"> <img src={logo} width='200'/></Link>
                </div>
                <div className='right-container'>
                    <p><Link id='user' to="/users">User Profile</Link></p>
                    <p className='login'>Log in</p>
                    <p className='signup-btn'>Sign up</p>
                </div>
            </div>
        </div>
    )
}

export default NavBarTop;