import react from 'react';
import {Link} from 'react-router-dom';
import logo from './logo2_NoBackground.png';

const NavBarTop = () => {

    return (
            <div className='navbar-container'>

                <div className='left-container'>
                    <p>
                        <Link id='home' to ="/" className='link'>Home</Link>
                    </p>
                    <p>
                        <Link id='expense-form' to="/expenses/add" className='link'>Add Expense</Link>
                    </p>
                </div>

                <div className='logo'>
                    <Link id='home' to="/" className="home-link"> <img src={logo} width='200'/></Link>
                </div>

                <div className='right-container'>
                    <p><Link id='user' to="/users" className='link'>User Profile</Link></p>
                    <p className='login'>Log in</p>
                    <p className='signup-btn'>Sign up</p>
                </div>

            </div>
    )
}

export default NavBarTop;