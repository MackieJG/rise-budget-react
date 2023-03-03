import React, {useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ExpenseContainer from './ExpenseContainer';
import PotContainer from './PotContainer';
import UserContainer from './UserContainer';
import HomePage from './HomePage';
import AnalyticsContainer from './AnalyticsContainer';
import AdviceContainer from './AdviceContainer';
import ApiRequest from "../helpers/request";


const MainContainer = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const request = new ApiRequest();
        const userPromise: any = request.get('/api/users')
        userPromise.then((data: any) => {setUser(data[0])})
        
    }, [])



    return (

        <Router>
            <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/users' element={ <UserContainer /> } />
            <Route path='/pots/*' element={ <PotContainer user={user}/> } />
            <Route path='/expenses/*' element={ <ExpenseContainer user={user}/> } />
            <Route path='/analytics' element={ <AnalyticsContainer /> } />
            <Route path='/advice' element={ <AdviceContainer /> } />
            </Routes>
        </Router>
    )
}

export default MainContainer;