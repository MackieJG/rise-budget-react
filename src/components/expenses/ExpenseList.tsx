import React from 'react';
import ExpenseDetail from "./ExpenseDetail";

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
    handlePost: (expense: ExpenseProps) => void;
}


const ExpenseList = ({expenses, handleDelete, handlePost}: ExpenseListProps ) => {
    if(expenses.length === 0 ) {
        return(<p>loading...</p>)
    }

    const expenseElements = expenses.map((expense, index) => {
        return (
            <li key={index} className="expense-item">
                <div className="expenses">
                    <ExpenseDetail expense={expense} handleDelete={handleDelete} handlePost={handlePost} />
                </div>
                </li>
        )
    })

    return (
        <>
        <ul className = "expense-list">
            {expenseElements}
        </ul>
        </>
    )
}
export default ExpenseList;