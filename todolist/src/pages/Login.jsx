import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { loginuser } from '../services/api';

const Login = () => {
 const[email,setEmail]= useState("");
 const[password,setPassword]= useState("");
 const navigate = useNavigate();

 const handleLogin = async(e) =>{
    e.preventDefault();
    try{
    const response= await loginuser({email,password});
    console.log(response);
    //saving Jwt in local storage
    localStorage.setItem("token",response.jwt);
       
    alert("login successfully");    
    navigate("/");
    }
    catch(error){
        alert(error.response?.data||"login failed");

    }

 }
    

  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-10 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
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
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
