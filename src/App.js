import  React from "react";
import AppState from "./components/useContext/AppContext"
// import MyComponent from "./MyComponent";
import Child from "./components/useContext/Child";
import UseMemoEx from "./components/useMemoHook/UseMemoEx";
import UseRefHook from "./components/useRefHook/UseRefHook";

function App() {  
 

  return (
    <div>
      {/* <AppState> */}
        <UseRefHook/>
        {/* <UseMemoEx/> */}
        {/* <Child /> */}
      {/* </AppState> */}
    </div>
  );
}

export default App;