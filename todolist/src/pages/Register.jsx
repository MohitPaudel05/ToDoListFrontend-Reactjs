import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registeruser } from '../services/api';

const Register = () => {

const [name, setName]= useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const navigate = useNavigate();

const handleRegister = async(e)=>{
    e.preventDefault();
    try{
        await  registeruser({Name:name,Email:email,Password: password});
        alert("Registration Completed ! Proceed to Login");
        navigate("/login");

    }
    catch(error){
        alert(error.response?.data || "Registration Failed");
    }
}



  return (
     <div className="max-w-md mx-auto p-6 bg-white mt-10 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
  