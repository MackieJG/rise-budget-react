import React, { useState } from 'react';
import ProviderForm from "./ProviderForm";

enum CategoryType {
  GROCERIES = "GROCERIES",
  UTILITIES = "UTILITIES",
  RENT = "RENT",
  MORTGAGE = "MORTGAGE",
  SUBSCRIPTIONS = "SUBSCRIPTIONS",
  ENTERTAINMENT = "ENTERTAINMENT",
  TRANSPORT = "TRANSPORT",
  EATING_OUT = "EATING_OUT",
  HEALTH = "HEALTH",
  GENERAL = "GENERAL"
};
interface ExpenseProps {
  id: number;
  title: string;
  amount: number;
  provider: number | null;
  category: CategoryType | null;
  user: any;
  date: string;
};
interface ProviderProps {
  id: number;
  name: string;
};
interface ExpenseFormProps {
  onCreate: (expense: any) => void;
  onCreateProvider: (expense: any, provider: any) => void;
  user: any;
  providers: any;
  categories: any;
};

const ExpenseForm = ({ user, providers, categories, onCreate, onCreateProvider }: ExpenseFormProps) => {
  const [stateExpense, setStateExpense] = useState<ExpenseProps>({
    id: 0,
    title: '',
    amount: 0,
    provider: null,
    category: null,
    user: user,
    date: '',
  });


  const [isNewProvider, setIsNewProvider] = useState(false);
  const [newProviderName, setNewProviderName] = useState();

  const handleChange = function (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setStateExpense(prevExpense => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleProvider = function (event: any) {
    const index = parseInt(event?.target.value);
    if (index === -1) {
      setIsNewProvider(true);
    } else {
      setIsNewProvider(false);
      const selectedProvider = providers[index];
      let copiedExpense = { ...stateExpense };
      copiedExpense['provider'] = selectedProvider;
      setStateExpense(copiedExpense);
    }
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
    if (isNewProvider) {
      onCreateProvider(stateExpense, newProviderName);
    } else {
      onCreate(stateExpense);
    }
  };

  const providerOptions = [
    <option key={-1} value={-1}>
      Create a new provider
    </option>,
    ...providers.map((provider: ProviderProps, index: number) => (
      <option key={index} value={index}>
        {provider.name}
      </option>
    )),
  ];

  const categoryOptions = categories.map((category: any, index: number) => {
    return (
      <option key={index} value={index}>
        {category}
      </option>
    )
  });

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='expense-form-container'>
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

        <select name="provider"
          onChange={handleProvider}
          defaultValue="select-provider"
          className='dropdown'
        >
          <option disabled value="select-provider">
            provider
          </option>
          {providerOptions}
        </select>

        {isNewProvider ? <div>
          <ProviderForm onChangeProvider={setNewProviderName} providerName={newProviderName} />
        </div> : null}

        <select name="category"
          onChange={handleCategory}
          defaultValue="select-category"
          className='dropdown'
        >

          <option disabled value="select-category">
            category
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