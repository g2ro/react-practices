import React from 'react';
// import { Kanban_Board } from './assets/scss/KanbanBoard.scss';
import './assets/scss/KanbanBoard.scss';
import CardList from './CardList';

function KanbanBoard() {
  return (
    <>
      <div className="Kanban_Board">
        <CardList />
      </div>
    </>
  );
}

export default KanbanBoard;
