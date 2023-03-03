import React, { useState } from "react";

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
    amount: number;
    user: any;
};

interface UserProps {
    id: number;
    name: string;
    budget: number;
    expenses: ExpenseProps[];
    pots: PotProps[];
};

interface UserFormProps {
    onCreate: (user: any) => void;
    user: any
};

const UserForm = ({ onCreate }: UserFormProps) => {

    const [stateUser, setStateUser] = useState<UserProps>({
        id: 0,
        name: '',
        budget: 0,
        expenses: [],
        pots: []
    });

    const handleChange = function (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setStateUser(prevUser => ({
          ...prevUser,
          [name]: value,
        }));
    };

    const handleSubmit = function (event: any) {
        event.preventDefault();
        onCreate(stateUser);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="User Name"
                name="name"
                onChange={handleChange}
                value={stateUser.name}
                />
                <input
                type="number"
                placeholder="Budget"
                name="budget"
                onChange={handleChange}
                value={stateUser.budget}
                />
                <button type="submit">Save</button>
            </form>    
        </div>
    );

};

export default UserForm;