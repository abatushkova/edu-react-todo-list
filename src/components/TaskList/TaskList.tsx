import React from 'react';
import { Task } from '../Task/Task';
import './TaskList.scss';

export const TaskList = () => {
  return (
    <ul className="task-list">
      <Task />
      <button
        type="button"
        className="task-list__button"
      >Clear All</button>
    </ul>
  );
}
