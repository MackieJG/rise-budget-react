import React from 'react';
import {Link} from 'react-router-dom'

const Expense = ({ expense }) => {
    const url = "/expenses/" + expense.id;
  
    return (
      <div>
        {expense ? (
          <>
            <p>
              <Link to={url} className="invidualExpense">
                {expense.title}
              </Link>
            </p>
            <p>{expense.amount}</p>
            <p>{expense.date}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
export default Expense;  