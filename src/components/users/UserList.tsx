import React from 'react'
import UserDetail from './UserDetail';

interface ExpenseProps {
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: any;
    user: any;
    time: string;
}

interface UserProps {
    name: string;
    budget: BigInt;
    expenses: ExpenseProps[];
    pots: PotProps[];
}

interface PotProps {
    id: number;
    title: string;
    amount: number;
    goal_date: string;
}

interface UserListProps {
    users: UserProps[];
    handleDelete: (id: number) => void;
}

const UserList = ({users}: UserListProps, {handleDelete}:any) => {
    if( users.length === 0 ) {
        return (<p>loading...</p>)
    }
    const userElements = users.map((user, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <UserDetail user={user} handleDelete={handleDelete}/>
                </div>
            </li>
        )
    })

   
    
    return (
        <>
        <ul className="component-list">
            {userElements}
        </ul>
        </>
    )
}
export default UserList;