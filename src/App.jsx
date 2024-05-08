import { Router } from "react-router-dom"
import LogintContextProvider from "./Usecontext/context"



function App() {




  return (

    <LogintContextProvider>

      <Router/>
      </LogintContextProvider>

  )
}

export default App
