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
            <div className ="expense-detail"></div>
        )
    }
}