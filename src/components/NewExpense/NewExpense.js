import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseSubmit={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;
