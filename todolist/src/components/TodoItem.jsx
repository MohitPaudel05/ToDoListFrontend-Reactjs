import React, { useEffect, useState } from "react";
import { GetTodos,DeleteTodo, UpdateTodo } from "../services/api";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  

  const handleSave = async () => {
    if (!editTitle.trim()) return alert("Title required!");
    try {
      await UpdateTodo(todo.id, {
        title: editTitle,
        description: editDescription,
      });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
    setEditId(null);
    if (onUpdate) onUpdate(todo.id);// Call onUpdate to refresh the list
    alert("Task updated successfully");
  };

  // Handle delete with confirmation
  const handleDelete = async (id) => {
    if (window.confirm("Delete task?")) {
      try {
        await DeleteTodo(todo.id);
        alert("Task deleted successfully");
        if (onDelete) onDelete(id);
      } catch (error) {
        console.error("Error deleting todo:", error);
      }

    }
  };

  return (
    <li className="bg-red-200 p-4 rounded-lg shadow-lg shadow-gray-500 mb-4">
      {/* Conditional rendering based on isEditing state */}
      {editId === todo.id ? (
        <>
          <input
          placeholder="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            placeholder="Description"
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