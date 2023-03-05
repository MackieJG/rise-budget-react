import React from 'react';
import Expense from './Expense';

interface ExpenseProps {
    id: number;
    title: string;
    amount: number;
    provider: any;
    category: any;
    user: any;
    date: string;
}

interface ExpenseListProps {
    expenses: ExpenseProps[];
    handleDelete: (expense: ExpenseProps) => void;
    handleEdit: (expense: ExpenseProps) => void;
}


const ExpenseList = ({expenses, handleDelete, handleEdit}: ExpenseListProps ) => {
    
    if(expenses.length === 0 ) {
        return(<p>loading...</p>)
    }

    const expenseElements = expenses.map((expense, index) => {
        return (
            <div key={index} className="expense-item">
                <Expense expense={expense}></Expense>
            </div>
        )
    })

    return (
        <div className='expense-list-page'>
            <h2 className='expense-list__header'>Recent Spending</h2>
            <h3 className='expense-list__subheader'>Click on a purchase for more details!</h3>
            <div className="expense-list-container">
                    {expenseElements}
            </div>
        </div>
    )
}
export default ExpenseList;