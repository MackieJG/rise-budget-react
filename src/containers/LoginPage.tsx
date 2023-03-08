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
        <div>
            <NavBarTop />
            <div className='login-container'>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button onClick={onClick}>Log In</button>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;