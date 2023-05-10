import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>

      <p className="cartitem__price">{item.price}</p>

      <select className="cartitem__select" onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <button className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
