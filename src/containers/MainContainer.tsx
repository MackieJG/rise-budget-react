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

    const [users, setUsers] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const userPromise: any = request.get('/api/users')
        const expensePromise = request.get('/api/expenses')
        const providerPromise = request.get('/api/providers')

        Promise.all([expensePromise, providerPromise, userPromise])
        .then((data) => {
            setExpenses(data[0]);
            setProviders(data[1]);
            setUsers(data[2]);
        });
        
    }, [])



    return (

        <Router>
            <Routes>
            <Route path='/' element={ <HomePage expenses={expenses} users={users}/> } />
            <Route path='/users/*' element={ <UserContainer /> } />
            <Route path='/pots/*' element={ <PotContainer user={users}/> } />
            <Route path='/expenses/*' element={ <ExpenseContainer user={users} expenses={expenses} providers={providers} /> } />
            <Route path='/analytics' element={ <AnalyticsContainer /> } />
            <Route path='/advice' element={ <AdviceContainer /> } />
            </Routes>
        </Router>
    )
}

export default MainContainer;