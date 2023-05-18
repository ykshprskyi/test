import { Iproduct } from "../productCard/productCard";
import { Counter } from "../counter/counter";
import "./cartItem.scss";

export const CartItem = (product: Iproduct) => {
  return (
    <div className="cart-item">
      <div className="cart-item_wrapper">
        <div className="cart-item__title cart-item__val">{product.title}</div>
        <div className="cart-item__desc cart-item__val">
          {product.description}
        </div>
        <div className="cart-item__price cart-item__val">
          <div className="cart-item__price__price ">{product.price}</div>
          <div className="cart-item__price__currency">{product.currency}</div>
        </div>
        <div className="cart-item__val">
          <Counter id={product.id} count={product.count} />
        </div>
      </div>
    </div>
  );
};
