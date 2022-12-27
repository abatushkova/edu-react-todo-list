import React, { useState } from 'react';
import './AddTask.scss';

export const AddTask = () => {
  const [text, setText] = useState('');

  const handleAddClick = () => {
    setText('');
  }

  return (
    <div className="field">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="field__input"
        placeholder="Add new to-do"
      />
      <button
        type="button"
        onClick={handleAddClick}
        className="field__button"
      >+</button>
    </div>
  );
}
