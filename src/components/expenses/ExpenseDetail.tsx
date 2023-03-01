import React from 'react'

enum CategoryType {
    Grocieries,
    Utilities,
    Rent,
    Mortgage,
    Subscriptions,
    Entertainment,
    Eatingout,
    Transport,
    Health,
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
}
const ExpenseDetail = ({expense, handleDelete}: ExpenseDetailProps) => {
    const onDelete = () => {
        handleDelete(expense)
    }
    const onEdit = ({navigate}: any) => {
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
            <p>{expense.title}</p>
            <p>{expense.amount}</p>
            <p>{expense.provider.name}</p>
            <p>{expense.category}</p>
            <p>{expense.date}</p>
        </div>
        <div className="buttons">
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit</button>
        </div>
        </>
    )
}
export default ExpenseDetail;