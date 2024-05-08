import { createContext, useState } from "react";

export const LoinContext = createContext()




function LogintContextProvider({children}) {
  const [test, settest] = useState("")
  const [test1, settest1] = useState("")
  return (
  <LoinContext.Provider value={{test,test1}}>{children}</LoinContext.Provider>
  )
}

export default  LogintContextProvider