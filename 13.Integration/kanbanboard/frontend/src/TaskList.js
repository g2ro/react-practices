import React, { useEffect, useRef, useState } from 'react';
import { Task_List, Input_Add_Task } from './assets/scss/Task_List.scss';
import Task from './Task';
import axios from 'axios';
function TaskList({ cardNo }) {
  const resetTask = useRef(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (cardNo) => {
    const response = await axios.get(`kanbanboard/task`, {
      method: 'get',
      params: { cardNo },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data.data;
    setTasks([...data]);
  };

  const addTask = async (task) => {
    try {
      const response = await axios.post(`/kanbanboard/task`, task, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      });
      const jsonResult = response.data;
      setTasks([jsonResult.data, ...tasks]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks(cardNo);
  }, []);

  return (
    <div className={Task_List}>
      <ul>
        {tasks
          ? tasks.map((e) => {
              return <Task key={e.no} Task={e} />;
            })
          : null}
      </ul>

      <input
        className={Input_Add_Task}
        type="text"
        placeholder="태스크 추가"
        ref={resetTask}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            const task = {
              name: e.target.value,
              done: 'N',
              cardNo: cardNo,
            };

            addTask(task);
            resetTask.current.value = '';
          }
        }}
      ></input>
    </div>
  );
}

export default TaskList;
