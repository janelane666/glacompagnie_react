import * as React from "react";

const BasketContext = React.createContext();
const BasketContextProvider = ({children}) => {
    const [cart, setCart] = React.useState();
    const setCartLength = () => setCart(JSON.parse(localStorage.getItem("cart")).length);
    const value = {cart, setCartLength};
    return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
};

export const useBasket = () => React.useContext(BasketContext);
export default BasketContextProvider;