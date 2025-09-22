import React from "react";
import { logoutuser } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

 const handleLogout = async () => {
  try {
    await logoutuser(); 
      localStorage.removeItem("token");
    alert("logout successfully");// optional, only if backend needs logout
  } catch (error) {
    console.log("Logout error:", error);
  }

  
  navigate("/");                         // redirect to home page
};

  return (
    <nav className=" bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">
        <Link to="/">Todo App</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="cursor-pointer">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
