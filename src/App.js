import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialState = [
  {
    id: 4,
    title: "Expense 4",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: 3,
    title: "Expense 3",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 2,
    title: "Expense 2",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: 1,
    title: "Expense 1",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialState);

  const addExpenseHandler = (expense) => {
    expense = {
      id: initialState[0].id + 1,
      ...expense,
    };
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
