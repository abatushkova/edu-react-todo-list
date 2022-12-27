import React from 'react';
import './Task.scss';

export const Task = () => {
  return (
    <li className="task">
      <button className="task__button task__button--done">=</button>
      <p className="task__text">Buy x-mas presents</p>
      <button className="task__button task__button--edit">!</button>
      <button className="task__button task__button--delete">-</button>
    </li>
  );
}
