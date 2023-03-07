import React from 'react'
import UserDetail from './UserDetail';

interface ExpenseProps {
    title: string;
    amount: number;
    provider: any;
    categoryType: any;
    user: any;
    time: string;
};
interface PotProps {
    id: number;
    title: string;
    targetAmount: number;
    currentAmount: number;
    user: any;
};
interface UserProps {
    id: number;
    name: string;
    budget: number;
    expenses: ExpenseProps[];
    pots: PotProps[];
};
interface UserListProps {
    users: UserProps[];
    handleDelete: (user: UserProps) => void;
    handleEdit: (user: UserProps) => void;
};

const UserList = ({users, handleDelete, handleEdit}: UserListProps) => {
    
    if( users.length === 0 ) {
        return (<p>loading...</p>)
    };

    const userElements = users.map((user, index) => {
        return (
            <li key={index}>
                    <UserDetail user={user} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </li>
        );
    });
    
    return (
        <>
            {userElements}
        </>
    );

};

export default UserList;