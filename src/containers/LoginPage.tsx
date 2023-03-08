import { useNavigate } from 'react-router-dom';
import NavBarTop from '../components/navigation/NavBarTop';
import Footer from '../components/footer/Footer';
import '../App.css';

const LoginPage = () => {

    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/home`)
    };

    return (
        <div className='wrapper'>
            <NavBarTop />
            <div className='wrapper-2'>
                <div className='login-container'>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button onClick={onClick} className="login-button">Log In</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;