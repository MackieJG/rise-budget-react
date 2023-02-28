import React, { useState, useEffect } from 'react'

interface User {
    name: string;
    budget: BigInt;
    expenses: [];
    pots: [];
}

interface Expense {
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: any;
    user: any;
    timeStamp: string;
}

interface Pot {
    title: string;
    amount: BigInt;
    user: any;

}

interface UserListProps {
    users: User[];
}
const UserList: React.FC<UserListProps> = ({users}) => {
    if( users.length === 0 ) {
        return (<p>loading...</p>)
    }
    const userElements = users.map((user, index) => {
        return (
            <li key={index} className="component-item">
            <div className="component">
                <User user={user}/>
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