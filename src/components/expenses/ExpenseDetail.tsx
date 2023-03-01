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
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: CategoryType;
    user: any;
    timeStamp: string;
}

const ExpenseDetail = ({expense}: any, {handleDelete}: any) => {

    const onDelete = () => {
        handleDelete(expense.id)
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