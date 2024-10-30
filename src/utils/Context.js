import { createContext } from "react";

const Context = createContext({
    loginOpen : false,
    addItemOpen : false,
    userName : "defaultName",    
})

export default Context;