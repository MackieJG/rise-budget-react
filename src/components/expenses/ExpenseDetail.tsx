import React from 'react'
import {useNavigate} from 'react-router-dom';
import Expense from './Expense';
import Swal from 'sweetalert2'

enum CategoryType {
    GROCERIES = "GROCERIES",
    UTILITIES = "UTILITIES",
    RENT = "RENT",
    MORTAGE = "MORTAGE",
    SUBSCRIPTIONS = "SUBSCRIPTIONS",
    ENTERTAINMENT = "ENTERTAINMENT",
    EATINGOUT = "EATINGOUT",
    TRANSPORT = "TRANSPORT",
    HEALTH = "HEALTH",
  }
  
interface ExpenseProps {
    id: number;
    title: string;
    amount: number;
    provider: any;
    category: CategoryType;
    user: any;
    date: string;
}
interface ExpenseDetailProps {
    expense: ExpenseProps;
    handleDelete: (expense: ExpenseProps) => void;
    handleEdit: (expense: ExpenseProps) => void;
}

const ExpenseDetail = ({expense, handleDelete}: ExpenseDetailProps) => {
    
    const navigate = useNavigate()

    const onDelete = () => {
        handleDelete(expense)
    }
    
    const onEdit = () => {
        navigate(`/expenses/${expense.id}/edit`)
    }
    
    if(!expense) {
        return (
            <p>
                loading...
            </p>
        )
    }
    return (
        <div className='expense-wrapper'>
            <div className='expense-detail__container'>
                {/* <Expense expense={expense}/> */}
                <p>Title: {expense.title}</p>
                <p>Amount: £{expense.amount}</p>
                <p>Provider: {expense.provider.name}</p>
                <p>Category: {expense.category}</p>
                <p>{expense.date}</p>
                <div className="button-container">
                    <button onClick={onDelete}>Delete</button>
                    <button onClick={onEdit}>Edit</button>
                </div>
            </div>
        </div>
    )
}
export default ExpenseDetail;