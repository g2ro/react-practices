import React from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';
function Task({ Task }) {
  return (
    <li className={_Task}>
      <input type="checkbox" />
      {Task.name}
      <a href="#" className={Task_Remove}></a>
    </li>
  );
}

export default Task;
