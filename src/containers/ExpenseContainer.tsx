import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import ApiRequest from "../helpers/request";
import ExpenseList from "../components/expenses/ExpenseList";
import NavBarTop from "../components/navigation/NavBarTop";
import ExpenseForm from "../components/expenses/ExpenseForm";
import Footer from "../components/footer/Footer";
// import ExpenseFormEdit from "../components/expenses/ExpenseFormEdit"


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
}


interface PotProps {
    title: string;
    amount: BigInt;
    user: any;

}
interface ExpenseProps {
    id: any
    title: string;
    amount: number;
    provider: any;
    category: CategoryType;
    user: object | null;
    date: string
}

const ExpenseContainer = ({ user }: any) => {

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

    const findExpenseById = (id: any) => {
        return expenses.find((expense: ExpenseProps) => {
            return expense.id === parseInt(id);
        })
    }
    const ExpenseFormEditWrapper = () => {
        const { id } = useParams();
        let foundExpense = findExpenseById(id);
        if (!foundExpense) {
            return <div>Loading...</div>;
        }
        return <ExpenseFormEdit providers={providers} categories={categories} user={user} expense={foundExpense} onEdit={handleEdit} />;
    }


    const handleDelete = (expense: any) => {
        const request = new ApiRequest();
        const url = '/api/expenses/' + expense.id;
        request.delete(url).then(() => {
            window.location.href = '/expenses';
        })
    }


    const handleEdit = (expense: any) => {
        const request = new ApiRequest();
        const url = '/api/expenses' + expense.id;
        expense["user"] = user
        request.put(url, expense).then(() => {
            window.location.href = '/expenses'
        })
    }

    const handlePost = (expense: any) => {
        const request = new ApiRequest();
        expense["user"] = user
        request.post('/api/expenses', expense).then(() => {
            window.location.href = '/expenses'
        })
    }
    const handlePostNoProvider = (expense: any, provider: any) => {
        if (provider) {
            const request = new ApiRequest();
            expense["user"] = user
            request.post('/api/expenses', expense).then(() => {
                window.location.href = '/expenses'
            })
            request.post('/api/providers', provider).then(() => {
                window.location.href = '/expenses'
            })
        } else {
            const request = new ApiRequest();
            expense["user"] = user
            request.post('/api/expenses', expense).then(() => {
                window.location.href = '/expenses'
            })

        }
    }

    return (
        <>
            <NavBarTop />
            <Routes>
                <Route path="/" element={<ExpenseList expenses={expenses} handleDelete={handleDelete} />} />
                <Route path="/add" element={<ExpenseForm providers={providers} categories={categories} onCreate={handlePost} onCreateProvider={handlePostNoProvider} />} />
                <Route path="/edit"element={<ExpenseFormEditWrapper  />}/>
            </Routes>
            <Footer/>
        </>
    )

}
export default ExpenseContainer;