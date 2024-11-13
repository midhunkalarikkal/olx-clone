import { createContext } from "react";

const Context = createContext({
    loginOpen : false,
    addItemOpen : false,
    userLoggedIn: false,
    liveProductsLoading: true,
    frLoading: true,
    useInfo: null,
    updateItemOpen: false,
    updateItem: null,
})

export default Context;