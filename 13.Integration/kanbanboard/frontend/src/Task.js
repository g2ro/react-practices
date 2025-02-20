import React, { useEffect, useState } from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';
import axios from 'axios';

function Task({ Task }) {
  const [isChecked, setIsChecked] = useState(Task.done == 'Y' ? true : false);

  useEffect(() => {
    const done = isChecked ? 'Y' : 'N';
    updateTask(Task.no, done);
  }, [isChecked]);

  const updateTask = async (no, done) => {
    try {
      const response = await axios.put(`/kanbanboard/task/${no}`, null, {
        method: 'put',
        params: { done },
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li className={_Task}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      {Task.name}
      <a href="#" className={Task_Remove}></a>
    </li>
  );
}

export default Task;
