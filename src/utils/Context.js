import { createContext } from "react";

const Context = createContext({
    loginOpen : false,
    addItemOpen : false,
    userLoggedIn: false,
    liveProductsLoading: true,
    frLoading: true,
    useInfo: null,
})

export default Context;