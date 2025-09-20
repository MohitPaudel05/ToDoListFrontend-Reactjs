import React, { useEffect, useState } from "react";
import { DeleteTodo, UpdateTodo } from "../services/api";

const TodoItem = ({ todo }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleSave = async () => {
    await UpdateTodo(todo.id, {
      title: editTitle,
      description: editDescription,
    });
    setEditId(null);
    alert("Task updated successfully");

    window.location.reload(); // Reload the page to fetch and display the updated list
  };

  // Handle delete with confirmation
  const handleDelete = async () => {
    if (window.confirm("Delete task?")) {
      await DeleteTodo(todo.id);
      alert("Task deleted successfully");
    }
  };

  return (
    <li className="bg-white p-4 rounded-lg shadow">
      {/* Conditional rendering based on isEditing state */}
      {editId === todo.id ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="border p-2 rounded"
          />
          {/* <button onClick={handleEditClick} className="bg-green-500 text-white px-3 py-1 rounded">Edit</button> */}

          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setEditId(null)}
              className="bg-gray-400 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className=" text-xl font-semibold  text-yellow-500">
            {todo.title}
          </h3>
          <p>{todo.description}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setEditId(todo.id)}
              className="bg-yellow-400 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
