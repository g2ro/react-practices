import React from 'react';
import { Card_List } from './assets/scss/CardList.scss';
import Card from './Card';
function CardList(props) {
  return (
    <>
      <div className={Card_List}>
        <h1>To Do</h1>
        <Card />
      </div>

      <div className={Card_List}>
        <h1>Doing</h1>
      </div>

      <div className={Card_List}>
        <h1>Done</h1>
      </div>
    </>
  );
}

export default CardList;
