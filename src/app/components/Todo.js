import { useState } from 'react';

const Todo = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleDelete = () => {
    const isConfirmed = confirm("Are you sure you want to delete this task?");
    if (isConfirmed) {
      onDelete(todo.id);
    }
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-4">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 mb-2"
          />
        ) : (
          <p className="text-lg">{todo.title}</p>
        )}
        {isEditing ? (
          <textarea
          className="border border-gray-300 rounded-md px-4 py-2 mb-2 flex flex-nowrap"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        ) : (
          <p className="text-sm text-gray-500 ">{todo.description}</p>
        )}
      </div>
      <div>
        {isEditing ? (
          <button onClick={handleSaveEdit} className="mr-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="mr-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Edit</button>
        )}
        <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
