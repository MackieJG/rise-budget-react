import React, {useState} from 'react';

enum CategoryType {
  GROCERIES = "GROCERIES",
  UTILITIES = "UTILITIES",
  RENT = "RENT",
  MORGTAGE = "MORTGAGE",
  SUBSCRIPTIONS = "SUBSCRIPTIONS",
  ENTERTAINMENT = "ENTERTAINMENT",
  EATINGOUT = "EATINGOUT",
  TRANSPORT = "TRANSPORT",
  HEALTH = "HEALTH",
}
interface ExpenseProps{
  id: number
  title: string;
  amount: number;
  provider: { id: number, name: string }
  category: CategoryType; 
  user: object | null;
  date: string;
}


interface ExpenseFormEditProps {
  expense: ExpenseProps;
  amount: number;
  user: any;
  providers: any;
  categories: any;
  onEdit: (expense: any) => void;
}

const ExpenseFormEdit = ({expense, providers, categories, onEdit }: ExpenseFormEditProps) => {
const [stateExpense, setStateExpense] = useState<ExpenseProps>(
  {
    id: expense.id,
    title: expense.title,
    amount: expense.amount,
    provider: expense.provider,
    category: expense.category,
    user: expense.user,
    date: expense.date

  }
)

    const handleChange = function (event: any) {
        const { name, value } = event.target;
        setStateExpense(prevExpense => ({
          ...prevExpense,
          [name]: value,
        }));
      };

    const handleProvider = function (event: any) {
        const selectedProvider= providers.find((provider: any) => provider.id === parseInt(event.target.value));
        console.log(selectedProvider)
        let copiedExpense = {...stateExpense };
        copiedExpense['provider'] = selectedProvider;
        setStateExpense(copiedExpense)
    }

    const handleCategory = function (event: any) {
      console.log(categories)
        const selectedCategory= categories.find((category: any) => category.id === event.target.value);
        console.log(selectedCategory);
        let copiedExpense = {...stateExpense };
        copiedExpense['category'] = selectedCategory;
        setStateExpense(copiedExpense)
    }

    const handleSubmit = function (event: any) {
        event.preventDefault();
        
        onEdit(stateExpense);
      };
    
      const providerOptions = providers.map((provider: any, index: number) => {
        return (
          <option key={index} value={provider.id}>
            {provider.name}
          </option>
        );
      });
    
      const categoryOptions = categories.map((category: any, index: number) => {
          return (
          <option key={index} value={category}>
              {category}
          </option>
          )
      });

      return (
        <div>
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
              defaultValue={expense.provider.id}
              className='dropdown'
              >
              <option disabled value="select-provider"
              >
                choose your provider
              </option>
              {providerOptions}
            </select>
            <select name="category" 
              onChange={handleCategory} 
              defaultValue={expense.category}
              className='dropdown'
              >
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

}
export default ExpenseFormEdit;