import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (newProduct) => {
    let exist = isInCart(newProduct.id);
    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantify: newProduct.quantify,
          };
        } else {
          return product;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    let otraArray = cart.filter((product) => product.id !== id);
    setCart(otraArray);
  };

  const getTotalQuantityById = (id) => {
    let producto = cart.find((prod) => prod.id === id);

    return producto?.quantify;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantify;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantify * elemento.price;
    }, 0);
    return total;
  };

  let data = {
    cart: cart,
    addItem: addItem,
    clearCart: clearCart,
    removeItem: removeItem,
    getTotalQuantityById: getTotalQuantityById,
    getTotalItems: getTotalItems,
    getTotalPrice: getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
