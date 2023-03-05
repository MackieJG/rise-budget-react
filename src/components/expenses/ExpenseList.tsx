import React from 'react';
import Expense from './Expense';
// import './expenseList.css'

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
            <li key={index} className="expense-item">
                <div className="expenses">
                    <Expense expense={expense}  />
                </div>
            </li>
        )
    })

    return (
        <div className="expense-list-container">
        <ul className = "expense-list">
            {expenseElements}
        </ul>
        </div>
    )
}
export default ExpenseList;