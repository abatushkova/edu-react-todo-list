import React, { useState } from 'react';
import { useTasksDispatch } from '../../context/TaskProvider';
import './AddTask.scss';

let nextId = 0;

export const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleAddClick = () => {
    if (!text.length) return;

    dispatch({
      type: 'add',
      payload: {
        id: nextId++,
        text: text,
      },
    });
    setText('');
  }

  return (
    <div className="field">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="field__input"
        placeholder="Add new to-do" />
      <button
        type="button"
        onClick={handleAddClick}
        className="field__button"
      >+</button>
    </div>
  );
}
