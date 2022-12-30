import React from 'react';
import { Task } from '../Task/Task';
import { useTasks, useTasksDispatch } from '../../context/TaskProvider';
import './TaskList.scss';

export const TaskList = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const handleCLearAllClick = () => {
    dispatch({
      type: 'clear',
      payload: [],
    });
  };

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
      {tasks.length > 0 && (
        <button
          type="button"
          className="task-list__button"
          onClick={handleCLearAllClick}
        >Clear All</button>
      )}
    </ul>
  );
}
