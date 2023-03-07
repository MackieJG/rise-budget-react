import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './advice.css'
import NavBarTop from '../components/navigation/NavBarTop';
import Footer from '../components/footer/Footer';
import AdviceList from '../components/advice/AdviceList';
import BuyHouseSavingAdvice from '../components/advice/BuyHouseSavingAdvice';
import LongTermSavingAdvice from '../components/advice/LongTermSavingAdvice';
import PensionsAdvice from '../components/advice/PensionsAdvice';
import RainyDayAdvice from '../components/advice/RainyDayAdvice';
import ShortTermSavingAdvice from '../components/advice/ShortTermSavingAdvice';


const AdviceContainer = () => {

    return (
        <>

        <NavBarTop/>
        <AdviceList />
        <Routes>
            <Route path="/pensions" element={<PensionsAdvice/>} />
            <Route path="/rainy_day" element={<RainyDayAdvice />} />
            <Route path="/short_term"element={<ShortTermSavingAdvice  />}/>
            <Route path="/house" element={<BuyHouseSavingAdvice />} />
            <Route path="/long_term" element={<LongTermSavingAdvice />} />
        </Routes>
        <Footer/>
        
        </>
    )
}

export default AdviceContainer;