import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
       <div className="mb-2">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>
      <div className="mb-2">
        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600">
          Add New Task +
        </button>
        </div>
        <div className="flex justify-between mt-2 mb-4 border border-grey-500 rounded-md px-4 py-2 w-full">
        <h2 className="text-lg font-bold">Tasks</h2>
        <h2 className="text-lg font-bold">Actions</h2>
      </div>
    </form>
  );
};

export default TaskForm;
