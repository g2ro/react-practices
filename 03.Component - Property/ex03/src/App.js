import React from 'react';
import './assets/css/styles.css';
import GroceryList from './GroceryList';

function App(props) {
  const groceries = [
    { name: 'milk', count: 10 },
    { name: 'egg', count: 20 },
    { name: 'bread', count: 5 },
  ];

  return (
    <div id={'App'}>
      <h1>{'Grocery List'}</h1>
      <GroceryList groceries={groceries} />
    </div>
  );
}

export default App;
