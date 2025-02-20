import React, { useEffect, useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import axios from 'axios';
import TaskList from './TaskList';
function Card({ data }) {
  const [visual, setVisual] = useState(false);
  const [tasks, setTasks] = useState([]);

  return (
    <div className={_Card}>
      <div
        className={[Card_Title, visual ? Card_Title_Open : null].join(' ')}
        onClick={() => {
          setVisual(!visual);
        }}
      >
        {data.title}
      </div>
      <div className="Card_Details">
        {data.description}
        {visual && <TaskList cardNo={data.no} />}
      </div>
    </div>
  );
}

export default Card;
