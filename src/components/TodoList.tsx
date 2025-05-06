import TodoItem from './TodoItem';
import { Todo } from '../types';
import React from 'react';


interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TodoList;