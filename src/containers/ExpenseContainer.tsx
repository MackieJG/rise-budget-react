import React, { useState, useEffect } from "react";
import './expense.css'
import { useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import ApiRequest from "../helpers/request";
import ExpenseList from "../components/expenses/ExpenseList";
import NavBarTop from "../components/navigation/NavBarTop";
import ExpenseForm from "../components/expenses/ExpenseForm";
import Footer from "../components/footer/Footer";
import ExpenseFormEdit from "../components/expenses/ExpenseFormEdit";
import ExpenseDetail from "../components/expenses/ExpenseDetail";


enum CategoryType {
    GROCERIES = "GROCERIES",
    UTILITIES = "UTILITIES",
    RENT = "RENT",
    MORTGAGE = "MORTGAGE",
    SUBSCRIPTIONS = "SUBSCRIPTIONS",
    ENTERTAINMENT = "ENTERTAINMENT",
    EATINGOUT = "EATINGOUT",
    TRANSPORT = "TRANSPORT",
    HEALTH = "HEALTH",
};

interface ExpenseProps {
    id: number;
    title: string;
    amount: number;
    provider: any;
    category: CategoryType;
    user: any;
    date: string
};

const ExpenseContainer = ({ user, expenses, providers }: any) => {
    
    const [categories, setCategories] = useState(Object.values(CategoryType));

    useEffect(() => {
        const request = new ApiRequest();
        setCategories(Object.values(CategoryType));
    }, []);

    const findExpenseById = (id: any) => {
        return expenses.find((expense: ExpenseProps) => {
            return expense.id === parseInt(id);
        });
    };

    const ExpenseDetailWrapper = () => {
        const { id } = useParams();
        let foundPirate = findExpenseById(id)
        return <ExpenseDetail expense={foundPirate} handleDelete={handleDelete} handleEdit={handleEdit}/>;
      };

    const ExpenseFormEditWrapper = () => {
        const { id } = useParams();
        let foundExpense = findExpenseById(id);
        if (!foundExpense) {
            return <div>Loading...</div>;
        }
        return (<ExpenseFormEdit expense={foundExpense} amount={0} providers={providers} categories={categories} user={user} onEdit={handleEdit} /> );
    };

    const handleDelete = (expense: any) => {
        const request = new ApiRequest();
        const url = '/api/expenses/' + expense.id;
        request.delete(url).then(() => {
            window.location.href = '/expenses';
        });
    };

    const handleEdit = (expense: any) => {
        const request = new ApiRequest();
        const url = '/api/expenses/' + expense.id;
        expense["user"] = {... user}
        request.put(url, expense).then(() => {
            window.location.href = '/expenses'
        });
    };

    const handlePost = (expense: any) => {
        const request = new ApiRequest();
        expense["user"] = user[0]
        request.post('/api/expenses/', expense).then(() => {
            window.location.href = '/expenses'
        });
    };

    const handlePostNoProvider = (expense: any, provider: any) => {
        if (provider) {
            const request = new ApiRequest();
            expense["user"] = user[0];

            const payload: any = {name: provider}
            request.post('/api/providers/', payload).then((res) => res.json())
            .then((data) => {
                expense["provider"] = data;
                return request.post('/api/expenses/', expense)
            }) 
            .then(() => {
                window.location.href = '/expenses';
            });
            
        } else {
            const request = new ApiRequest();
            expense["user"] = {...user}
            request.post('/api/expenses/', expense).then(() => {
                window.location.href = '/expenses'
            });
        };
    };

    return (
        <>
            <NavBarTop />
            <Routes>
                <Route path="/" element={<ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} />} />
                <Route path="/add" element={<ExpenseForm user={user} providers={providers} categories={categories} onCreate={handlePost} onCreateProvider={handlePostNoProvider} />} />
                <Route path="/:id/edit"element={<ExpenseFormEditWrapper  />}/>
                <Route path="/:id" element={<ExpenseDetailWrapper />} />
            </Routes>
            <Footer/>
        </>
    );

};

export default ExpenseContainer;