import React from 'react';
import ExpenseDetail from "./ExpenseDetail";
import ExpensePieChart from './ExpensePieChart';

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
                    <ExpenseDetail expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />
                </div>
            </li>
        )
    })

    return (
        <>
        <ul className = "expense-list">
            {expenseElements}
        </ul>
        <ExpensePieChart expenses={expenses} />
        </>
    )
}
export default ExpenseList;