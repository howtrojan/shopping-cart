import "./Card.css";
import { FaCartPlus } from "react-icons/fa";
import formatCurrency from "../../utils/formatCurrency" 

export const Card = ({ data }) => {
  const { title, thumbnail, price } = data;

  return (
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="Produto" className="card-image" />
      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price , 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button type="button" className="button-add-cart">
        <FaCartPlus />
      </button>
    </section>
  );
};
