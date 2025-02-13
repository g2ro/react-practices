import React from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import TaskList from './TaskList';
function Card(props) {
  return (
    <div className={_Card}>
      <div className={`${Card_Title} ${Card_Title_Open}`}>Stroy Board 작성</div>
      <TaskList />
    </div>
  );
}

export default Card;
