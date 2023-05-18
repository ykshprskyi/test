import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cart.scss";
import { Iproduct } from "../../primitives/productCard/productCard";
import { CartItem } from "../../primitives/cartItem/cartItem";

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const cart: Array<any> = useSelector((state: any) => state.cart);
  let totalCost: number = 0;
  const getTotal = () => {
    cart.map((el) => {
      totalCost += el.price * el.count;
      setTotal(totalCost);
    });
    totalCost = 0;
  };
  let currency: string;
  if (cart.length > 0) {
    currency = cart[0].currency;
  }
  useEffect(() => {
    getTotal();
  }, [cart]);
  return (
    <div className="cart">
      <div className="cart_items-form_wrapper">
        <div className="cart_items">
          {cart.map((el: Iproduct) => {
            return <CartItem key={el.id} {...el} />;
          })}
        </div>
        <div className="cart_form"></div>
      </div>
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
