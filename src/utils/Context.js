import { createContext } from "react";

const Context = createContext({
    loginOpen : false,
    addItemOpen : false,
    userLoggedIn: false,
    liveProductsLoading: true,
    FreshRecommendationLoading: true,
    useInfo: null,
})

export default Context;