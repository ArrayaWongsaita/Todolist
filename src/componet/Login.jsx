


import { useNavigate } from "react-router-dom";
import { storeToken } from "../utility/local-storage";

import axios from "axios";
import { useState } from "react";



function Login() {
  const [email,setmail] = useState("")
  const [Password,SetPassword] = useState("")


  const loginUser = async () => {
    const data = { email:email, password: Password };
    const response = await axios.post(
      'https://cc17-assessment-api.onrender.com/auth/login',
      data
    );
    console.log(response.data.token)
    storeToken(response.data.token);
  };

  // const navigate =useNavigate();

  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log("test")
  //   navigate("/TodoList")
  // }
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center fo">
      <div className="w-2/5 h-auto bg-gray-950 rounded-sm  shadow-sm shadow-red-50/25 p-5">
        
        <form action="" className="h-full gap-16 flex flex-col  justify-between">

        <h1 className="text-white text-5xl font-bold">Welcome</h1>
        <input value={email} onChange={(e)=>setmail(e.target.value)}type="text" className=" text-xl bg-gray-950" placeholder="username"/>
        <input value={Password} onChange={(e)=>SetPassword(e.target.value)}type="text" className="text-xl bg-gray-950 text-gray-600 " placeholder="password" />
        <br />
        <button type="button" className="bg-gray-900 text-white p-3 rounded-3xl" onClick={loginUser}>LOG IN</button>
        </form>
      </div>
    </div>
  )
}

export default Login