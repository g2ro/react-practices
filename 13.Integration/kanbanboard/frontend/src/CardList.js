import React, { useState, useEffect } from 'react';
import { Card_List } from './assets/scss/CardList.scss';
import Card from './Card';
import axios from 'axios';
function CardList(props) {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`/kanbanboard/card`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data.data;
      setCards([...data]);
      // console.log(cards); // 왜 처음에는 출력이 되지 않는 것인가.
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // useEffect(() => {
  //   console.log(JSON.stringify(cards));
  // }, [cards]);

  return (
    <>
      <div className={Card_List}>
        <h1>To Do</h1>
        {cards
          .filter((e) => e.status === 'ToDo')
          .map((e) => (
            <Card key={e.no} data={e} />
          ))}
      </div>

      <div className={Card_List}>
        <h1>Doing</h1>
        {cards
          .filter((e) => e.status === 'Doing')
          .map((e) => (
            <Card key={e.no} data={e} />
          ))}
      </div>

      <div className={Card_List}>
        <h1>Done</h1>
        {cards
          .filter((e) => e.status === 'Done')
          .map((e) => (
            <Card key={e.no} data={e} />
          ))}
      </div>
    </>
  );
}

export default CardList;
