import React, { useState, useEffect }from 'react';
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
    id: number;
    title: string;
    amount: number;
    provider: any;
    category: CategoryType;
    user: any;
    date: string;
}

interface ExpenseFormProps {
    expenses: ExpenseProps;
    onCreate: (expense: any) => void;
}

interface ExpenseForm {
    title: HTMLInputElement;
    amount: HTMLInputElement;
    date: HTMLInputElement;
}


const ExpenseForm = ({expenses, onCreate}: ExpenseFormProps) => {

    const [stateExpense, setStateExpense ] = useState(
        {
            title: "",
            amount: 0,
            provider: null,
            category: null,
            date: ""

        }
    );
    if (!expenses.length === 0){
            return (
                <p>Loading...</p>
            )
    } 

    const handleChange = function (event: any) => {
        let propertyName = event.target.name;
        let copiedExpense = {stateExpense};
        copiedExpense[propertyName] = event?.target.name;
        setStateExpense(copiedExpense);
    }

    const handleProvider = function (e: any) => {
        const index = parseInt(event?.target.value);
        const SelectedProvider = Provider[index]
        let copiedExpense = {...StateExpense};
        copiedExpense['provider'] = selectedExpense;
        setStateExpense(copiedExpense);
    }

    const handleCategory = function (e: any) => {
        const index = ParseInt(event?.target.value);
        const SelectedCategory = Category[index]
        let copiedExpense = {...StateExpense};
        copiedExpense['category'] = selectedExpense;
        setStateExpense(copiedExpense);
    }

    const handleSubmit =  function (event) {
        event.prefaultDefault();
        onCreate(stateExpense);
    }

    const providerOptions = providers.map((provider: any, index: number) => {
        return <option key={index}
    })
}
export default ExpenseForm;