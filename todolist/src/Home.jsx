import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { GetTodos } from "./services/api";
import "./App.css"

const Home = () => {
  const [todos, setTodos] = useState([]);
  const token = localStorage.getItem("token");

  const fetchTodos = async () => {
    if (!token) return; // don't fetch if not logged in
    const data = await GetTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, [token]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-blue-100 min-h-screen">
      <Navbar />

      {token ? (
        <div>
          <div className="sticky top-0 mb-4">
            <TodoForm onAdd={fetchTodos }   />
          </div>
          <ul className="space-y-2 mt-3">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Task List</h2>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onDelete={fetchTodos} onUpdate={fetchTodos} />
            ))}
          </ul>
        </div>
      ) : (
       <TodoForm />
      )}
    </div>
  );
};

export default Home;