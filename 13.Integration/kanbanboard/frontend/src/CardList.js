import React, { useState } from 'react';
import { Card_List } from './assets/scss/CardList.scss';
import Card from './Card';
import data from './assets/json/data';
function CardList(props) {
  return (
    <>
      <div className={Card_List}>
        <h1>To Do</h1>
        {data
          .filter((e) => e.status === 'ToDo')
          .map((e) => (
            <Card key={e.no} data={e} />
          ))}
      </div>

      <div className={Card_List}>
        <h1>Doing</h1>
        {data
          .filter((e) => e.status === 'Doing')
          .map((e) => (
            <Card key={e.no} data={e} />
          ))}
      </div>

      <div className={Card_List}>
        <h1>Done</h1>
        {data
          .filter((e) => e.status === 'Done')
          .map((e) => (
            <Card key={e.no} data={e} />
          ))}
      </div>
    </>
  );
}

export default CardList;
