import React, { useState, useEffect } from "react";
import ApiRequest from "../helpers/request";
import ExpenseList from "../components/ExpenseList";
enum CategoryType {
    Grocieries,
    Utilities,
    Rent,
    Mortgage,
    Subscriptions,
    Entertainment,
    Eatingout,
    Transport,
    Health,
    
}
interface ExpenseProps {
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: CategoryType;
    user: any;
    timeStamp: string;
}

interface UserProps {
    name: string;
    budget: BigInt;
    expenses: ExpenseProps[];
    pots: PotProps[];
}

interface UserListProps {
    users: UserProps[];
}

interface PotProps {
    title: string;
    amount: BigInt;
    user: any;

}

const ExpenseContainer = () => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const expensePromise = request.get('api/expenses')
        expensePromise
        .then((data: any) => setExpenses(data))
    }, [])

    return (
        <>
        <ExpenseList  expenses={expenses} />

        </>
    )
}
export default ExpenseContainer;