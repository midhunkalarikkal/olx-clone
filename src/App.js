import { useState } from "react";
import Body from "./components/Body";
import Context from "./utils/Context";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className="App">
      <Context.Provider value={{loginOpen , setLoginOpen}}>
        <Body />
      </Context.Provider>
    </div>
  );
}

export default App;
