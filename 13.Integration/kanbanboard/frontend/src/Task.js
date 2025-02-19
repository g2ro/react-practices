import React, { useState } from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';
function Task({ Task }) {
  const [isChecked, setIsChecked] = useState(Task.done == 'Y' ? true : false);
  return (
    <li className={_Task}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      {Task.name}
      <a href="#" className={Task_Remove}></a>
    </li>
  );
}

export default Task;
