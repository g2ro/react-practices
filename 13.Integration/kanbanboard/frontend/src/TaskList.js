import React from 'react';
import styled from 'styled-components';
import { Task_List, Input_Add_Task } from './assets/scss/Task_List.scss';
import Task from './Task';
function TaskList(props) {
  const styledUl = styled.ul`
    list-style-type: none;
  `;

  return (
    <div className={Task_List}>
      <styledUl>
        <Task />
      </styledUl>
      <input
        className={Input_Add_Task}
        type="text"
        placeholder="태스크 추가"
      ></input>
    </div>
  );
}

export default TaskList;
