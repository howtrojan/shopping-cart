import { useContext } from "react";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

export const Cart = () => {
  const { cartItens , isCartVisible } = useContext(AppContext);

  function somarArrayComMap(cartItens) {    
    if (cartItens.length === 0) {
      return 0;
    }  
    
    var soma = cartItens.reduce(function (acumulador, cartItem) {
        return acumulador + cartItem.price;
      }, 0);
  
    return soma;
  }

  return (
    <section className={`cart ${isCartVisible ? 'cart-active' : ''}`}>
      <div className="cart-items">
        {cartItens.map((cartItem) => <CartItem key={cartItem.index} data={cartItem} /> )}
        
      </div>

      <div className="cart-resume">{formatCurrency(somarArrayComMap(cartItens),'BRL')}</div>
    </section>
  );
};
