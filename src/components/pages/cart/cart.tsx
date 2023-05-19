import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Iproduct } from "../../primitives/productCard/productCard";
import { CartItem } from "../../primitives/cartItem/cartItem";
import OrderForm from "../../primitives/orderForm/orderForm";
import "./cart.scss";

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const cart: Array<any> = useSelector((state: any) => state.cart);
  const getTotal = () => {
    let totalCost: number = 0;
    cart.map((el) => {
      totalCost += el.price * el.count;
      setTotal(totalCost);
    });
  };
  let currency: string;
  if (cart.length > 0) {
    currency = cart[0].currency;
  }
  useEffect(() => {}, []);
  useEffect(() => {
    getTotal();
  }, [cart]);
  return (
    <div className="cart">
      {cart.length > 0 ? (
        <div className="cart_items_form_wrapper">
          <div className="cart_items">
            {cart.map((el: Iproduct) => {
              return <CartItem key={el.id} {...el} />;
            })}
          </div>
          <div className="cart_form">
            <OrderForm />
          </div>
        </div>
      ) : (
        <h2> Cart is empty</h2>
      )}
      {cart.length > 0 ? (
        <div className="cart_total">
          Total: {total} {currency}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
