import React from 'react'
import ExpenseProps from "./UserList"
import PotProps  from "./UserList"

interface UserProps {
    name: string;
    budget: BigInt;
    expenses: [];
    pots: [];
}

const UserDetail = ({user}: any, {handleDelete}: any) => {

    const onDelete = () => {
        handleDelete(user.id)
    }

    if(!user) {
        return(
            <p>
                "loading..."
            </p>
            )
    }
    return (
        <div className="component">
        <p>{user.name}</p>           
        <p>{user.budget}</p>
        <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default UserDetail;