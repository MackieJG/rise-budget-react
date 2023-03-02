import React, { useState, useEffect } from 'react';

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
  
  interface ExpenseProps {
    id: number;
    title: string;
    amount: number;
    provider: object | null;
    category: CategoryType | null;
    user: any;
    date: string;
  }
  
  interface Category {
    id: number;
    name: CategoryType;
  }
  
  interface ExpenseFormProps {
    onCreate: (expense: any) => void;
    providers: any;
    categories: CategoryType[];
  }
  
  const ExpenseForm = ({ providers, categories, onCreate }: ExpenseFormProps) => {
    const [stateExpense, setStateExpense] = useState<ExpenseProps>({
      id: 0,
      title: '',
      amount: 0,
      provider: null,
      category: null,
      user: null,
      date: '',
    });
  
    const handleChange = function (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
      const { name, value } = event.target;
      setStateExpense(prevExpense => ({
        ...prevExpense,
        [name]: value,
      }));
    };
  
    const handleProvider = function (event: any) {
      const index = parseInt(event?.target.value);
      const selectedProvider = providers[index];
      let copiedExpense = { ...stateExpense };
      copiedExpense['provider'] = selectedProvider;
      setStateExpense(copiedExpense);
    };
  
   const handleCategory = function (event: any) {
   const index = parseInt(event?.target.value);
   const selectedCategory = categories[index]; 
   let copiedExpense = { ...stateExpense };
   copiedExpense['category'] = selectedCategory;
   setStateExpense(copiedExpense);
    };
  
    const handleSubmit = function (event: any) {
      event.preventDefault();
      onCreate(stateExpense);
    };
  
    const providerOptions = providers.map((provider: any, index: number) => {
      return (
        <option key={index} value={index}>
          {provider.name}
        </option>
      );
    });
  
    const categoryOptions = categories.map((category: any, index: number) => {
        return (
        <option key={index} value={index}>
            {category}
        </option>
        )
    })
      ;
      
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Expense Title"
            name="title"
            onChange={handleChange}
            value={stateExpense.title}
          />
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            onChange={handleChange}
            value={stateExpense.amount}
          />
          <select name="provider" onChange={handleProvider} defaultValue="select-provider">
            <option disabled value="select-provider">
              choose your provider
            </option>
            {providerOptions}
          </select>
          <select name="category" onChange={handleCategory} defaultValue="select-category">
            <option disabled value="select-category">
              what category?
            </option>
            {categoryOptions}
          </select>
          <input type="date" name="date" placeholder="date" onChange={handleChange} value={stateExpense.date} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };
  
  export default ExpenseForm;
  