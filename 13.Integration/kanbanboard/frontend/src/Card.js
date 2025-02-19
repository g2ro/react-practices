import React, { useEffect, useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import axios from 'axios';
import TaskList from './TaskList';
function Card({ data }) {
  const [visual, setVisual] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (cardNo) => {
    const response = await axios.get('kanbanboard/task', {
      method: 'get',
      params: { cardNo },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data.data;
    setTasks([...data]);
  };

  useEffect(() => {
    fetchTasks(data.no);
  }, []);
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
        <TaskList
          tasks={visual ? tasks : null}
          cardNo={data.no}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default Card;
