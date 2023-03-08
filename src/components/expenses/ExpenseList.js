import Expense from './Expense';

const ExpenseList = ({ expenses, handleDelete, handleEdit }) => {

    if (expenses.length === 0) {
        return (<p>loading...</p>)
    };

    const expenseDateElements = [];

    expenses.map((expense) => {
        let newExpense = { ...expense };
        let expenseDate = new Date(newExpense.date)
        newExpense.dateObj = expenseDate;
        expenseDateElements.push(newExpense);
    });

    console.log('expense data elements', expenseDateElements);

    const sortedExpenses = expenseDateElements.sort((a, b) => {
        return b.dateObj - a.dateObj
    });

    console.log('sorted expenses', sortedExpenses);

    const elements = expenseDateElements.map((expense, index) => {
        return (
            <div key={index} className="expense-item">
                <Expense expense={expense}></Expense>
            </div>
        );
    });

    return (
        <div className='expense-list-page'>
            <h2 className='expense-list__header'>Recent Spending</h2>
            <h3 className='expense-list__subheader'>Click on a purchase for more details!</h3>
            <div className="expense-list-container">
                {elements}
            </div>
        </div>
    );
};

export default ExpenseList;