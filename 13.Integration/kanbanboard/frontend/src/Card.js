import React from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import TaskList from './TaskList';
function Card({ data }) {
  return (
    <div className={_Card}>
      <div className={`${Card_Title} ${Card_Title_Open}`}>{data.title}</div>
      <div className="Card_Details">
        {data.description}
        <TaskList tasks={data.tasks} />
      </div>
    </div>
  );
}

export default Card;
