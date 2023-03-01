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
    title: string;
    amount: BigInt;
    user: any;

}

interface UserListProps {
    users: UserProps[];
}

const UserList = ({users}: UserListProps) => {
    if( users.length === 0 ) {
        return (<p>loading...</p>)
    }
    const userElements = users.map((user, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <UserDetail user={user}/>
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