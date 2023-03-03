import React from 'react'
import {useNavigate} from 'react-router-dom';

interface PotProps {
    id: number;
    title: string;
    amount: number;
    user: any;
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

interface PotDetailProps {
    pot: PotProps;
    handleDelete: (pot: PotProps) => void;
    handleEdit: (pot: PotProps) => void;
}

const PotDetail = ({pot, handleDelete}: PotDetailProps) => {

    const navigate = useNavigate()

    const onDelete = () => {
        handleDelete(pot)
    }
    
    const onEdit = () => {
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
         </div>
        <div className="buttons">
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit Pot</button>
        </div>
        </>
    )
}
export default PotDetail;