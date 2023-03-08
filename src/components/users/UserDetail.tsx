import React from 'react'
import { useNavigate } from 'react-router-dom';
import user_img from '../users/user.jpeg';
import '../users/user.css';
interface ExpenseProps {
    title: string;
    amount: number;
    provider: any;
    categoryType: any;
    user: any;
    time: string;
}
interface PotProps {
    id: number;
    title: string;
    targetAmount: number;
    currentAmount: number;
    user: any;
}
interface UserProps {
    id: number;
    name: string;
    budget: number;
    expenses: ExpenseProps[];
    pots: PotProps[];
}
interface UserDetailProps {
    user: UserProps;
    handleDelete: (user: UserProps) => void;
    handleEdit: (user: UserProps) => void;
}

const UserDetail = ({user, handleDelete}: UserDetailProps) => {

    const navigate = useNavigate()

    const onDelete = () => {
        handleDelete(user)
    };
    
    const onEdit = () => {
        navigate(`/users/${user.id}/edit`)
    };

    if(!user) {
        return(
            <p>
                "loading..."
            </p>
            )
    };

    return (
        <>
        <div className="user-page">
            <div className='user-container'>
                <img src={user_img} width='200'className='user-img'/>
                <p className='user-p2'>{user.name}</p>
                <p className='user-p2'>Budget: £{user.budget}</p>
                <button onClick={onEdit}>Edit User & Budget</button>
            </div>
        </div>
        </>
    );

};

export default UserDetail;