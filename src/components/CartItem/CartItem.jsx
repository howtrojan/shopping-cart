import "./CartItem.css";
import { BsCartDashFill } from "react-icons/bs";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export const CartItem = ({ data }) => {
  const { cartItens, setCartItens } = useContext(AppContext);
  const { id, title, thumbnail, price } = data;

  const handleRemoveItem = () => {
    const itemIndex = cartItens.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartItens];
      updatedItems.splice(itemIndex, 1);
      setCartItens(updatedItems);
    }
  };
  return (
    <section className="cart-item">
      <img className="cart-item-img" src={thumbnail} alt="Imagem do Produto" />

      <div className="cart-item-content">
        <h3 className="cart-item-titulo">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
        <button
          type="button"
          className="button-remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};
