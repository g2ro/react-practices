import React from 'react';
import { Task_List, Input_Add_Task } from './assets/scss/Task_List.scss';
import Task from './Task';
function TaskList({ tasks }) {
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
      ></input>
    </div>
  );
}

export default TaskList;
