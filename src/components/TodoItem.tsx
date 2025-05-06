import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
    return (
        <li className='list-group-item'>
            <input
                className='form-check-input me-2'
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />
            <span className='ms-2 me-2'><strong>{todo.text}</strong></span>
            <button className='btn btn-danger btn-sm' onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;