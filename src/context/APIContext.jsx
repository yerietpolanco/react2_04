import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export const APIContext = createContext();


const APIProvider = ({ children }) => {
  const PIZZA_API = "/pizzas.json";
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch(PIZZA_API)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const getTotal = () => {
    return cartProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toLocaleString("es-CL")
  }

  const removeFromCart = (product) => {
    let cartProduct = cartProducts.find(
      (cartProduct) => cartProduct.name === product.name
    );

    if (cartProduct) {
      if (cartProduct.quantity === 1) {
        return setCartProducts(
          cartProducts.filter((cartProduct) => cartProduct.name !== product.name)
        );
      }

      // se crea un nuevo carro
      const newCartProducts = cartProducts.map((cartProduct) => {
        // se busca el producto que se quiere agregar
        if (cartProduct.name === product.name) {
          // y se mezcla con el carro, sumando 1 a su cantidad
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }

        return cartProduct;
      });

      return setCartProducts(newCartProducts);
    }
  };

  const addToCart = (product) => {
    // buscar si existe el producto en el carro
    let cartProduct = cartProducts.find(
      (cartProduct) => cartProduct.name === product.name
    );

    // si existe
    if (cartProduct) {
      // se crea un nuevo carro
      const newCartProducts = cartProducts.map((cartProduct) => {
        // se busca el producto que se quiere agregar
        if (cartProduct.name === product.name) {
          // y se mezcla con el carro, sumando 1 a su cantidad
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      });

      setCartProducts(newCartProducts);
    } else {
      // si no existe, se agrega el producto al carro y se le pasa quantity en 1
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }

    toast.success(`Producto ${product.name} agregado al carro`)
  };

  return (
    <APIContext.Provider
      value={{
        products,
        getTotal,
        setProducts,
        cartProducts,
        setCartProducts,
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
