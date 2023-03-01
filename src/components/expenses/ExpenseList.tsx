import React from "react";
import ExpenseProps from "../containers/ExpenseContainer";

interface ExpenseListProps {
    expenses: ExpenseProps[];
}

interface ExpenseProps {
    title: string;
    amount: BigInt;
    provider: any;
    categoryType: any;
    user: any;
    timeStamp: string;
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

const ExpenseList = ({expenses}: ExpenseListProps ) => {
    if(expenses.length === 0 ) {
        return(<p>loading...</p>)
    }

    const expenseElements = expenses.map((expense, index) => {
        return (
            <li key={index} className="expense-item">
                <div className="expenses">
                    <ExpenseDetail expense={expense} />
                </div>
                </li>
        )
    })

    return (
        <>
        <ul className = "expense-list">
            {expenseElements}
        </ul>
        </>
    )
}
export default ExpenseList;