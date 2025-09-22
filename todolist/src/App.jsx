import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const token = localStorage.getItem("token");

  return (
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  );
};

export default App;







// import React, { useState, useEffect } from "react";
// import { GetTodos, CreateTodo, DeleteTodo, UpdateTodo } from "./services/api";
// import Navbar from "./components/Navbar";


// import "./App.css";


// function App() {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editTitle, setEditTitle] = useState("");
//   const [editDescription, setEditDescription] = useState("");
//   //fetch todos from the API
//   const fetchTodos = async () => {
//     try {
//       const data = await GetTodos();
//       setTodos(data);
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//     }
//   };
//   //fetch todos on component mount
//   useEffect(() => {
//     fetchTodos();
//   }, []);
//   //handle form submission to create a new todo
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) return alert("Title is required!");
//     const newTodo = { title, description, isCompleted: false };
//     try {
//       await CreateTodo(newTodo);
//       fetchTodos();
//       setTitle("");
//       setDescription("");
//     } catch (error) {
//       console.error("Error creating todo:", error);
//     }
//   };
//   //handle delete todo
//   const handleDelete = async (id) => {
//     try {
//       const confirmDelete = window.confirm(
//         "Are you sure you want to delete this task?"
//       );
//       if (!confirmDelete) return;
//       await DeleteTodo(id);
//       alert("Task deleted successfully");
//       fetchTodos();
//     } catch (error) {
//       console.error("Error deleting todo:", error);
//     }
//   };
//   //handle edit click to populate the edit form
//   const handleEditClick = (todo) => {
//     setEditId(todo.id);
//     setEditTitle(todo.title);
//     setEditDescription(todo.description);
//   };
//   //handle update todo
//   const handleUpdate = async (id) => {
//     if (!editTitle.trim()) return alert("Title is required!");
//     try {
//       await UpdateTodo(id, { title: editTitle, description: editDescription });
//       setEditId(null);
//       setEditTitle("");
//       setEditDescription("");
//       fetchTodos();
//     } catch (error) {
//       console.error("Error updating todo:", error);
//     }
//   };
//   //handle cancel edit
//   const handleCancelEdit = () => {
//     setEditId(null);
//     setEditTitle("");
//     setEditDescription("");
//   };

//   return (
//     <div className="App  max-w-2xl mx-auto p-6 bg-blue-100 ">
//       <div className="flex items-start justify-center gap-6 mb-6 mt-6">
//         {/*left side - form */}
//         <div className="flex-1">
//           <div>
        
//       </div>
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-6 rounded-lg shadow-md mb-6 flex width-full flex-col fixed top-6"
//           >
//             <Navbar />
//             <div className="flex flex-col gap-3 mb-4">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 duration-300 cursor-pointer transition  transform hover:scale-69"
//               >
//                 Add Task
//               </button>
//               <p className="text-sm text-gray-500">
                
//                 <i>{description.length} / 10 characters
//                   </i>
//                   {description.length > 10 && (
//                     <span className="text-red-500"> - Description is too long!</span>
//                   )}
//               </p>
//             </div>
//           </form>
//         </div>

//         {/* Display Todo List */}
//         <div
        
//         className="flex-1 bg-white p-6 rounded-lg shadow-md ">
          
//           <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 ">Task List</h2>
          
//         <ul className="space-y-2 mt-10 ">
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="bg-white p-4 rounded-lg shadow flex flex-col gap-2"
//             >
//               {editId === todo.id ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editTitle}
//                     onChange={(e) => setEditTitle(e.target.value)}
//                     className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                   <input
//                     type="text"
//                     value={editDescription}
//                     onChange={(e) => setEditDescription(e.target.value)}
//                     className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                   <div className="flex gap-2 mt-2">
//                     <button
//                       type="button"
//                       onClick={() => handleUpdate(todo.id)}
//                       className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
//                     >
//                       Save
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleCancelEdit}
//                       className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <h3 className="text-xl font-semibold">{todo.title}</h3>
//                   <p>{todo.description}</p>
//                   <p className="text-sm text-gray-500">
//                     {/* Status: {todo.isCompleted ? "Completed" : "Pending"} */}
//                   </p>
//                   <div className="flex gap-2 mt-2">
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(todo)}
//                       className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => handleDelete(todo.id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//         </div>
//       </div>

//       {/* Add Todo Form */}

//       {/* <button
//         type="button"
//         onClick={fetchTodos}
//         className="mt-6 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
//       >
//         Get Todo
//       </button> */}
//     </div>
//   );
// }

// export default App;


