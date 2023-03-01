import React from 'react'

interface PotProps {
    title: string;
    amount: number;
    user: UserProps;
}

interface UserProps{
    name: string;
    budget: BigInt;
    expenses: ExpenseProps[];
    pots: PotProps[];
}

interface ExpenseProps {
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: CategoryType;
    user: any;
    timeStamp: string;
}

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

const PotDetail = ({pot}: any) => {

    if(!pot) {
        return (
            <p>
                Hummer
            </p>
        )
    }
    return (
        <div className="pot-detail">
            <p>{pot.title}</p>
            <p>{pot.amount}</p>
            <p>That's yer Jam son.</p>
        </div>
    )
}
export default PotDetail;