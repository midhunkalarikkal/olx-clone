import { useState } from "react";
import Body from "./components/Body";
import Context from "./utils/Context";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [addItemOpen, setAddItemOpen] = useState(false);
  const [userName , setUserName] = useState(null);
  return (
    <div className="App">
      <Context.Provider value={{loginOpen , setLoginOpen , addItemOpen , setAddItemOpen , userName , setUserName}}>
        <Body />
      </Context.Provider>
    </div>
  );
}

export default App;
