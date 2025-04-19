const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {

  const [cartProducts, setCartProduct] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saveCart = localStorage.getItem("cart");
      setCartProduct((prev) => JSON.parse(saveCart));
    }
  }, []);

  const addProduct = (productId) => {
    const saveCart = [...(cartProducts || []), productId];
    setCartProduct((prev) => saveCart);
    localStorage.setItem("cart", JSON.stringify(saveCart));
  };

  return (
    <CartContext.Provider value={{ cartProducts, setCartProduct, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
