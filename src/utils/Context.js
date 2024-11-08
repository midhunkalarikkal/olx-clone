import { createContext } from "react";

const Context = createContext({
    loginOpen : false,
    addItemOpen : false,
    userName : null,
    userUid : null,
    userLoggedIn: false,
})

export default Context;