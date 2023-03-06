import React, { useState, useEffect } from 'react';
import NavBarTop from '../components/navigation/NavBarTop';
import Footer from '../components/footer/Footer';
import ApiRequest from '../helpers/request';


const AnalyticsContainer = () => {

    const [groceriesExpenses, setGroceriesExpenses] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const groceriesExpensesPromise = request.get('/api/filteredexpenses?categories=GROCERIES');
        console.log(groceriesExpensesPromise)
        Promise.all([groceriesExpensesPromise])
        .then((data) => {
            setGroceriesExpenses(data[0]);
            
        })
    }, [])

    

    return (
        <>
        <NavBarTop/>
        <h1>A bunch of charts!</h1>
        <Footer/>
        </>
    )
}

export default AnalyticsContainer;