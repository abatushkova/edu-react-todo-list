import React, { FormEvent, useState } from 'react';
import { useTasksDispatch } from '../../context/TaskProvider';
import './AddTask.scss';

let nextId = 0;

export const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <form className="field" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="field__input"
        placeholder="Add new to-do"
      />
      <button type="submit" className="field__button">+</button>
    </form>
  );
}
