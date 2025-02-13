import React from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';
function Task(props) {
  return (
    <li className={_Task}>
      <input type="checkbox" />
      개별 화면 목업
      <a href="#" className={Task_Remove}></a>
    </li>
  );
}

export default Task;
