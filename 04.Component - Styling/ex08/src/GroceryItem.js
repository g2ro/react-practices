import React from 'react';
import { Grocery_item } from './assets/scss/GroceryItem.scss';

function GroceryItem({ name, count }) {
  return (
    <li className={Grocery_item}>
      <strong>{name}</strong>
      <span>{count}</span>
    </li>
  );
}

export default GroceryItem;
