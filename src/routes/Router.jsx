import { createBrowserRouter ,  RouterProvider} from "react-router-dom"
import Login from "../componet/Login"
import TodoList from "../componet/TodoList"



const router = createBrowserRouter([
  // {path:"/sdsaf",element : <App/>},
  {path:"/",element : <Login/>},
  {path:"/TodoList",element : <TodoList/>},
])



function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router