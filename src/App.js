import  React from "react";

import AppState from "./components/useContext/AppContext"
// import MyComponent from "./MyComponent";
import Child from "./components/useContext/Child";
import UseMemoEx from "./components/useMemoHook/UseMemoEx";
import UseRefHook from "./components/useRefHook/UseRefHook";
import Callbacks from "./components/useCallBackHook/Todo";

function App() {  
 

  return (
    <div className="App">
      {/* <AppState> */}
      <Callbacks/>
        {/* <UseRefHook/> */}
        {/* <UseMemoEx/> */}
        {/* <Child /> */}
      {/* </AppState> */}
    </div>
  );
}

export default App;