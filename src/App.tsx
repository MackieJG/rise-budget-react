import React from 'react';
import ExpenseContainer from './containers/ExpenseContainer'
import UserContainer from './containers/UserContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <ExpenseContainer />
      <UserContainer />
    </div>
  );
}

export default App;
