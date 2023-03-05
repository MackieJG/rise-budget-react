import React from 'react';
import NavBarBottom from '../components/navigation/NavBarBottom';
import NavBarTop from '../components/navigation/NavBarTop';
import Footer from '../components/footer/Footer';
import ExpensePieChart from '../components/expenses/ExpensePieChart';

interface ExpenseProps {
    id: number;
    title: string;
    amount: number;
    provider: any;
    category: any;
    user: any;
    date: string;
}
interface ExpensesPropsHome {
    expenses: ExpenseProps[];
}


const HomePage = ({expenses}: ExpensesPropsHome) => {

    return (

        <div className='home-page'>
            <NavBarTop/>
            <div className='info-container'>
                <div className='info-details'>
                    <p className='info'>You Have £700 left for the month</p>
                    <p className='short-message'>You're on track for this month!</p>
                </div>
                <div className='chart'>
                    <p>chart</p>
                    <ExpensePieChart expenses={expenses} />
                </div>
            </div>
            <NavBarBottom/>
            <Footer/>
        </div>
    )
}

export default HomePage;