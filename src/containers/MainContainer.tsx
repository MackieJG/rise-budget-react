import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ExpenseContainer from './ExpenseContainer';
import PotContainer from './PotContainer';
import UserContainer from './UserContainer';
import HomePage from './HomePage';
import AnalyticsContainer from './AnalyticsContainer';
import AdviceContainer from './AdviceContainer';


const MainContainer = () => {



    return (

        <Router>
            <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/users' element={ <UserContainer /> } />
            <Route path='/pots' element={ <PotContainer /> } />
            <Route path='/expenses' element={ <ExpenseContainer /> } />
            <Route path='/analytics' element={ <AnalyticsContainer /> } />
            <Route path='/advice' element={ <AdviceContainer /> } />
            </Routes>
        </Router>
    )
}

export default MainContainer;