import React from 'react';
import './advice.css'
import NavBarTop from '../components/navigation/NavBarTop';
import Footer from '../components/footer/Footer';
import AdviceList from '../components/advice/AdviceList';


const AdviceContainer = () => {

    return (
        <>
        <NavBarTop/>
            <AdviceList />
        <Footer/>
        </>
    )
}

export default AdviceContainer;