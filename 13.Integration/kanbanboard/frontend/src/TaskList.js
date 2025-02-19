import React, { useRef } from 'react';
import { Task_List, Input_Add_Task } from './assets/scss/Task_List.scss';
import Task from './Task';
import axios from 'axios';
function TaskList({ tasks, cardNo, setTasks }) {
  const resetTask = useRef(null);

  const addTask = async (task) => {
    try {
      const response = await axios.post('/kanbanboard/task', task, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      });
      const jsonResult = response.data;
      setTasks([jsonResult.data, ...tasks]);
      console.log(jsonResult.data);
    } catch (err) {
      console.error(err);
    }
  };

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
