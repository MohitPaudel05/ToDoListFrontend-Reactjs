import React, { useState } from "react";
import { CreateTodo } from "../services/api";
import Navbar from "./Navbar";

const TodoForm = ({ onAdd }) => {
    //states variables  for title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

//handle form submission to create a new todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    // title.trim to remove whitespace and check if title is empty
    if (!title.trim()) return alert("Title required!");
    const newTodo = { title, description, isCompleted: false };
    try {
        await CreateTodo(newTodo);
        //refresh
        if (onAdd) onAdd(newTodo); 

        
        
        alert("Task added successfully");

    } catch (error) {
        console.error("Error creating todo:", error);
    }
    setTitle("");
    setDescription("");
    
    
  
    

   
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4" onSubmit={handleSubmit}>
        <Navbar />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
