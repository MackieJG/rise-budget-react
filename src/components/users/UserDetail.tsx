import React from 'react'
import ExpenseProps from "./UserList"
import PotProps  from "./UserList"

interface UserProps {
    name: string;
    budget: BigInt;
    expenses: [];
    pots: [];
}

const UserDetail = ({user}: any) => {

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
        </div>
    )
}
export default UserDetail;