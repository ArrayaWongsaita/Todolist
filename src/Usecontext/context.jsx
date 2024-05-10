/* eslint-disable react/prop-types */
// context.js
import { createContext, useState } from "react";

const LoginContext = createContext();

export default function LoginContextFN({ children }) {
  const [key, setKey] = useState("");
  function alrhellow(){
    alert("hellow")
  }
  return (
    <LoginContext.Provider value={{ alrhellow, key, setKey }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext };
