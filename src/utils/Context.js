import { createContext } from "react";

const Context = createContext({
    loginOpen : false,
    addItemOpen : false,
    userName : null,    
})

export default Context;