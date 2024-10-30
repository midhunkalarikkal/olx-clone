import { createContext } from "react";

const userContext = createContext({
    loggedIn : "Default name",
})

export default userContext;