// App.js


import RouterFn from "./routes/Router";
import LoginContextProvider from "./Usecontext/context";

function App() {
  return (
    <LoginContextProvider>

        <RouterFn/>

    </LoginContextProvider>
  );
}

export default App;
