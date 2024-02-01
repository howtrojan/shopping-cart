import { useState } from "react";
import AppContext from "./AppContext";

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItens, setCartItens] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(true);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItens,
    setCartItens,
    isCartVisible,
    setIsCartVisible,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
