import { createContext, useEffect, useState } from "react";

export const APIContext = createContext();

const APIProvider = ({ children }) => {
    const PIZZA_API = "/pizzas.json";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(PIZZA_API)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [])

    return (
        <APIContext.Provider value={{products, setProducts}}>
            {children}
        </APIContext.Provider>
    )
}

export default APIProvider;