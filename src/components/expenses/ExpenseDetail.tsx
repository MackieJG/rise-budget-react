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

const ExpenseDetail = ({expense}: any) => {

    if(!expense) {
        return (
            <p>
                loading...
            </p>
        )
    }
    return (
        <div className="expense-detail">
            <p>{expense.title}</p>
            <p>{expense.amount}</p>
            <p>{expense.provider}</p>
            <p>{expense.categoryType}</p>
            <p>{expense.string}</p>
        </div>
    )
}
export default ExpenseDetail;