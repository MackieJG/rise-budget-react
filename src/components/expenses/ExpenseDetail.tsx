import React from 'react'
import {useNavigate} from 'react-router-dom';
 
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
        <>
        <div className="expense-detail">
            <li>{expense.title}</li>
            <li>£{expense.amount}</li>
            {/* <li>{expense.category}</li> */}
            {/* <li>{expense.provider.name}</li> */}
            <li>{expense.date}</li>
        <div className="button-container">
            <button onClick={onDelete} className={"delete-button button"}>Delete</button>
            <button onClick={onEdit} className={"edit-button button"}>Edit</button>
        </div>
        </div>
        </>
    )
}
export default ExpenseDetail;