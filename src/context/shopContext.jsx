import React, { createContext } from "react";
import all_products from "../components/assets/all_products";


export const shopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {all_products};

    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;