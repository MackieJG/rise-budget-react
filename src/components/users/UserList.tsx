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
            <li key={index} className="user-item">
                <div className="user">
                    <UserDetail user={user} handleDelete={handleDelete} handleEdit={handleEdit}/>
                </div>
            </li>
        );
    });
    
    return (
        <>
        <ul className="component-list">
            {userElements}
        </ul>
        </>
    );

};

export default UserList;