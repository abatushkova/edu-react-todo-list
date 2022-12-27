import React from 'react';
import { AddTask } from '../AddTask/AddTask';
import { TaskList } from '../TaskList/TaskList';
import './App.scss';

const App = () => {
  return (
    <div className="hero">
      <h1 className="headline">Do ToDo</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
