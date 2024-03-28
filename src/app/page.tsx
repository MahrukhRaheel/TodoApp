"use client";
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';
import { Todo } from './types/todo'; 

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]); 

  const handleAdd = (newTodo: Todo) => {
    setTodos(prevTodos => [...prevTodos, { ...newTodo, id: Date.now() }]);
  };
  

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id: number, newTitle: string, newDescription: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle, description: newDescription } : todo
    );
    setTodos(updatedTodos);
  };
  
  return (
    <>
    <div className="container mx-auto px-4 py-8">

      <h1 className="text-2xl font-bold mb-4 text-center">Todo List App</h1>
      <TaskForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
    </>
  );
}
