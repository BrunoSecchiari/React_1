import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Gas Station",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "2",
      title: "Hotel",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "3",
      title: "Country Club",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "4",
      title: "Restaurant",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
