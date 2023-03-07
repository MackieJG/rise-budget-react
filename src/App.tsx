import React from 'react';
import UserContainer from './containers/UserContainer'
import './App.css';
import ExpenseContainer from './containers/ExpenseContainer'
import PotContainer from './containers/PotContainer';
import NavBarTop from './components/navigation/NavBarTop';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <MainContainer/>
    </div>
  );
}
export default App;
