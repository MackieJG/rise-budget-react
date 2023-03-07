import React from 'react';
import './homepage.css'
import background from './expense-background.png'
import NavBarBottom from '../components/navigation/NavBarBottom';
import NavBarTop from '../components/navigation/NavBarTop';
import Footer from '../components/footer/Footer';
import ExpensePieChart from '../components/expenses/ExpensePieChart';
import PotList from '../components/pots/PotList';

interface ExpenseProps {
    id: number;
    title: string;
    amount: number;
    provider: any;
    category: any;
    user: any;
    date: string;
}
interface PotProps {
    id: number;
    title: string;
    targetAmount: number;
    currentAmount: number;
    user: any;
};
interface ExpensesPropsHome {
    expenses: ExpenseProps[];
    pots: PotProps[];
    users: any;
}


const HomePage = ({ expenses, users, pots }: ExpensesPropsHome) => {
  console.log("gimmr")
    const userBudget = users && users.length > 0 ? users[0].budget : 0;
    
    const expenseAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

    const potAmount = pots.reduce((total, pot) => total + pot.currentAmount, 0);

    const totalAmount = expenseAmount + potAmount;
    
    const remainingBudget = parseFloat((userBudget - totalAmount).toFixed(2));


    const remainingBudget1 = parseFloat((userBudget - expenses.reduce((total, expense) => total + expense.amount, 0)).toFixed(2));

    // const remainingBudget2 = parseFloat((remainingBudget1 - pots.reduce((total, pot) => total + pot.current_amount, 0)).toFixed(2));
    // console.log(remainingBudget2)
    
    return (
      <div className='wrapper'>
        <NavBarTop />
        <div className='wrapper-2'>
          <div className="info-container">
          {/* style={{ backgroundImage: `url(${background})`}} */}
            <div className="info-details">
              <div className="info">
                <p className='info-p1'>You have </p>
                <p className='info-p2'>£{remainingBudget}</p>
                <p className='info-p1'>left for the month</p>
              </div>
              <NavBarBottom />
              {/* {remainingBudget >= 0 ? (
                <p className="short-message">You're on track for this month!</p>
              ) : (
                <p className="short-message">You've exceeded your budget for this month!</p>
              )} */}
            </div>
            <div className="chart">
              <ExpensePieChart expenses={expenses} />
              <p className='chart-text'>Your spending breakdown based on category</p>
            </div>
          
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  

export default HomePage;