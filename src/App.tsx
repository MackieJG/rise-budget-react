import React from 'react';
import UserContainer from './containers/UserContainer'
import './App.css';
import ExpenseContainer from './containers/ExpenseContainer'

function App() {
  return (
    <div className="App">
      {/* <UserContainer/> */}
      
      <ExpenseContainer />
    </div>
  );
}

export default App;
