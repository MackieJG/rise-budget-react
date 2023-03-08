import { useNavigate } from 'react-router-dom';

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
    provider: any;
    category: CategoryType;
    user: any;
    date: string;
};
interface ExpenseDetailProps {
    expense: ExpenseProps;
    handleDelete: (expense: ExpenseProps) => void;
    handleEdit: (expense: ExpenseProps) => void;
};

const ExpenseDetail = ({ expense, handleDelete }: ExpenseDetailProps) => {

    const navigate = useNavigate();

    const onDelete = () => {
        handleDelete(expense)
    };

    const onEdit = () => {
        navigate(`/expenses/${expense.id}/edit`)
    };

    if (!expense) {
        return (
            <p>
                loading...
            </p>
        );
    }
    return (
        <div className='expense-detail__container'>
            <p>Title: {expense.title}</p>
            <p>Amount: £{expense.amount}</p>
            <p>Provider: {expense.provider.name}</p>
            <p>Category: {expense.category}</p>
            <p>{expense.date}</p>

            <div className="button-container">
                <button onClick={onDelete}>Delete</button>
                <button onClick={onEdit}>Edit</button>
            </div>
        </div>
    );
};

export default ExpenseDetail;