import { useState, useEffect } from 'react';
import NavBarTop from '../components/navigation/NavBarTop';
import Footer from '../components/footer/Footer';
import ApiRequest from '../helpers/request';
import FilteredExpenseBarChart from "../charts/FilteredExpenseBarChart";
import './analytics.css'


const AnalyticsContainer = () => {

    const [filteredExpenses, setfilteredExpenses] = useState([]);
    const [barChartExpense, setBarChartExpense] = useState([]);

    useEffect(() => {
        const request = new ApiRequest();
        const filteredExpensesPromise = request.get('/api/expenses');
        console.log(filteredExpensesPromise)
        Promise.all([filteredExpensesPromise])
            .then((data) => {
                setfilteredExpenses(data[0]);
            });
    }, []);

    const handleCategoryChange = (selectedCategory) => {
        const filteredExpensesByCategory = filteredExpenses.filter(expense => {
            return expense.category === selectedCategory;
        });
        console.log(filteredExpensesByCategory)
        setBarChartExpense(filteredExpensesByCategory);
    };

    const handleDateChange = (selectedDate) => {
        const [year, month] = selectedDate.split('-');
        const filteredExpensesByMonth = filteredExpenses.filter(expense => {
            const [expenseYear, expenseMonth] = expense.date.split('-');
            return expenseYear === year && expenseMonth === month;
        });
        console.log(filteredExpensesByMonth)
        setBarChartExpense(filteredExpensesByMonth);
    };

    return (
        <>
            <NavBarTop />
            <div className='chart-container'>
                <h1>Here you can view your spending over time</h1>
                <form>
                    <label htmlFor="category">Select a category: </label>
                    <select
                        id="category"
                        name="category"
                        onChange={(event) => handleCategoryChange(event.target.value)}
                        className="chart-dropdown"
                    >
                        <option value="">All</option>
                        <option value="GROCERIES">Groceries</option>
                        <option value="RENT">Rent</option>
                        <option value="UTILITIES">Utilities</option>
                        <option value="MORTGAGE">Mortgage</option>
                        <option value="SUBSCRIPTIONS">Subscriptions</option>
                        <option value="ENTERTAINMENT">Entertainment</option>
                        <option value="TRANSPORT">Transport</option>
                        <option value="EATING_OUT">Eating Out</option>
                        <option value="HEALTH">Health</option>
                        <option value="GENERAL">General</option>
                    </select>

                    <label htmlFor="date"> And date: </label>
                    <select
                        id="date"
                        name="date"
                        onChange={(event) => handleDateChange(event.target.value)}
                        className="chart-dropdown"
                    >
                        <option value="">All</option>
                        <option value="2023-01">January</option>
                        <option value="2023-02">February</option>
                        <option value="2023-03">March</option>
                        <option value="2023-04">April</option>
                        <option value="2023-05">May</option>
                        <option value="2023-06">June</option>
                        <option value="2023-07">July</option>
                        <option value="2023-8">August</option>
                        <option value="2023-09">September</option>
                        <option value="2023-10">October</option>
                        <option value="2023-11">November</option>
                        <option value="2023-12">December</option>
                    </select>
                </form>
                <FilteredExpenseBarChart barChartExpense={barChartExpense} />
            </div>

            <Footer />
        </>
    );
};

export default AnalyticsContainer;
