import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EmailModal from './components/EmailModal';
import { Todo } from './types';
import React from 'react';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Add new todo
  const addTodo = (text: string) => {
    // Create a new todo object(id, text, done)
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo done status
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    // Filter out the todo with the given id
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Send email with todo list
  const sendEmailLink = (email: string) => {
  const todoText = todos.map(todo => todo.text).join('%0D%0A');
  // const todoItems = todos.map((todo, index) => `${todo.done ? "✔" : "☐"} ${todo.text}`);

  const subject = encodeURIComponent("📝 My Custom Todo List");
  const body = encodeURIComponent(
    `Hello,\n\nHere is my current to-do list:\n\n${todoText}\n\nBest regards,\nYour Todo App`
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmailLink(email);
    setShowModal(false);
    setEmail('');
  };


  return (
    <div className='container mt-3'>
      <h1 className='mb-4'>📝 To-Do List 📝</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <button type="button" className='btn btn-outline-danger btn-sm mt-3' onClick={() => setTodos([])}>Clear All</button>
      <button type="submit" className='btn btn-outline-primary btn-sm mt-3 ms-2' onClick={() => setShowModal(true)}>Save List</button>

      <EmailModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSend={sendEmailLink}
      />
    </div>
  );
};

export default App;
