import React from 'react';

import Expenses from "./components/Expense/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {id: '01', title: 'Alcohol', amount: 17.54, date: new Date(2021, 5, 17)},
    {id: '02', title: 'Fried Chicken', amount: 4.99, date: new Date(2022, 5, 26)},
    {id: '04', title: 'Medicine', amount: 12.67, date: new Date(2020, 5, 8)},
    {id: '03', title: 'Tobaco', amount: 12.67, date: new Date(2022, 5, 8)},
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );

  /* return React.createElement(
    'div', 
    {}, 
    React.createElement(Headline, {}), 
    React.createElement(Expenses, {items:expenses})
  ); */

}

export default App;