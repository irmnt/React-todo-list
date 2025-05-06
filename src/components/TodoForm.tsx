import React from 'react';
import { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='md-3 mb-3 row'>
        <div className="col-sm-5">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task..."
            className='form-control form-control-sm'
          />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-outline-secondary btn-sm">Add</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
