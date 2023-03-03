import React from 'react'
import { useNavigate } from 'react-router-dom';
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
    amount: number;
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
        <div className="user-detail">
            <p>{user.name}</p>           
            <p>{user.budget}</p>
        </div>
        <div className="buttons">
            <button onClick={onEdit}>Edit User & Budget</button>
        </div>
        </>
    );

};

export default UserDetail;