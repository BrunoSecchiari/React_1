import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {id: '01', title: 'Alcohol', amount: 17.54, date: new Date(2021, 5, 17)},
    {id: '02', title: 'Fried Chicken', amount: 4.99, date: new Date(2022, 5, 26)},
    {id: '04', title: 'Medicine', amount: 12.67, date: new Date(2020, 5, 8)},
    {id: '03', title: 'Tobaco', amount: 12.67, date: new Date(2022, 5, 8)},
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;