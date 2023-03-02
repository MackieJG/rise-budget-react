import React, { useState, useEffect } from "react";
import ApiRequest from "../helpers/request";
import ExpenseList from "../components/expenses/ExpenseList";
import NavBarTop from "../components/navigation/NavBarTop";
import ExpenseForm from "../components/expenses/ExpenseForm";


enum CategoryType {
    GROCERIES = "GROCERIES",
    UTILITIES = "UTILITIES",
    RENT = "RENT",
    MORTAGE = "MORTAGE",
    SUBSCRIPTIONS = "SUBSCRIPTIONS",
    ENTERTAINMENT = "ENTERTAINMENT",
    EATINGOUT = "EATINGOUT",
    TRANSPORT = "TRANSPORT",
    HEALTH = "HEALTH",
  }


interface PotProps {
    title: string;
    amount: BigInt;
    user: any;

}

const ExpenseContainer = ({user}: any) => {

    const [expenses, setExpenses] = useState([]);
    const [providers, setProviders] = useState([]);
    const [categories, setCategories] = useState(Object.values(CategoryType));


    useEffect(() => {
        const request = new ApiRequest();
        const expensePromise = request.get('/api/expenses')
        const providerPromise = request.get('/api/providers')
        setCategories(Object.values(CategoryType));
        

        Promise.all([expensePromise, providerPromise])
        .then((data) => { 
            setExpenses(data[0]);
            setProviders(data[1]);
        })
    }, [])

    const handleDelete = (expense: any) => {
        const request = new ApiRequest();
        const url = '/api/expenses/' + expense.id;
        request.delete(url).then(() => {
            window.location.href = '/expenses';
        })
    }


    // const handleEdit = (expense: any) => {
    //     const request = new ApiRequest();
    //     const url = '/api/expenses' + expense.id;
    //     request.post(url).then(() => {
    //         window.location.href = '/api/expenses'
    //     })
    // }

  

    const handlePost = (expense: any) => {
        const request = new ApiRequest();
        expense["user"] = user
        request.post('/api/expenses', expense).then(() => {
          window.location.href = '/expenses'
        })
    }

    
    return (
        <>

        <NavBarTop/>
        <ExpenseList  expenses={expenses} handleDelete={handleDelete} />
        <ExpenseForm providers={providers} categories={categories} onCreate={handlePost}/>

        </>
    )
}

export default ExpenseContainer; 