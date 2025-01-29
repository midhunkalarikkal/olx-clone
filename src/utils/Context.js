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
    liveProductFetchError: false,
    profileProductFetchError: false,
})

export default Context;