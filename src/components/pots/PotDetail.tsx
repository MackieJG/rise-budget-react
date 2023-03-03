import React from 'react'
import { Link } from 'react-router-dom';

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

interface PotProps {
    id: number;
    title: string;
    amount: number;
    goal_date: string;
}

interface PotDetailProps {
    pot: PotProps;
    handleDelete: (pot: PotProps) => void;

}

const PotDetail = ({pot, handleDelete}: PotDetailProps) => {

    const onDelete = () => {
        handleDelete(pot)
    }
    
    const onEdit = ({navigate}: any) => {
        navigate(`/pots/${pot.id}/edit`)
    }

    if(!pot) {
        return (
            <p>
                loading...
            </p>
        )
    }

    return (
        <>
        <div className="pot-detail">
            <p>{pot.title}</p>
            <p>{pot.amount}</p>
            <p>{pot.goal_date}</p>
         </div>
        <div className="buttons">
            <button onClick={onDelete}>Delete</button>
            <button><Link id='pot-form-edit' to="/pots/edit"></Link>Edit Pot</button>
        </div>
        </>
    )
}
export default PotDetail;