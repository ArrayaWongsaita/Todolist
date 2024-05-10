// Login.js
import { useNavigate } from "react-router-dom";
import { getId, getToken, storeId, storeToken } from "../utility/local-storage";
import axios from "axios";
import {  useEffect, useState } from "react";
// import { LoginContext } from "../Usecontext/context";

function Login() {

  useEffect(()=>{
    

    if( getToken() !== "" && getId() !== "" )  navigate("/TodoList");

  },[])
  // const { alrhellow} = useContext(LoginContext);

  const navigate = useNavigate();
  const [email, setmail] = useState("");
  const [Password, SetPassword] = useState("");

  const loginUser = async () => {
    try {
      const data = { email: email, password: Password };
      const response = await axios.post(
        "https://cc17-assessment-api.onrender.com/auth/login",
        data
      );
      console.log(response.data.user.id);
      storeId(response.data.user.id)
      storeToken(response.data.token);
      navigate("/TodoList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center fo">
      <div className="w-2/5 h-auto bg-gray-950 rounded-sm  shadow-sm shadow-red-50/25 p-5">
        <form action="" className="h-full gap-16 flex flex-col  justify-between">
          <h1 className="text-white text-5xl font-bold">Welcome</h1>
          <input
            value={email}
            onChange={(e) => setmail(e.target.value)}
            type="text"
            className=" text-xl bg-gray-950 text-white "
            placeholder="username"
          />
          <input
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
            type="password"
            className="text-xl bg-gray-950 text-white"
            placeholder="password"
          />
          <br />
          <button
            type="button"
            className="bg-gray-900 text-white p-3 rounded-3xl"
            onClick={loginUser}
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
