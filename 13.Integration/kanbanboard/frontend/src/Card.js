import React, { useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import TaskList from './TaskList';
function Card({ data }) {
  const [visual, setVisual] = useState(true);
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
        <TaskList tasks={visual ? data.tasks : null} />
      </div>
    </div>
  );
}

export default Card;
