import React, { useEffect, useState } from "react";
//@ts-ignore
import { ReactComponent as CartIcon } from "../../../assets/images/cart.svg";
import { Link } from "react-router-dom";
import "./cartButton.scss";
import { useSelector } from "react-redux";

export const CartButton: React.FC = () => {
  const cart: Array<any> = useSelector((state: any) => state.cart);
  const [count, setCount] = useState(0);
  const getCount = () => {
    let quantity = cart.length;
    setCount(quantity);
  };
  useEffect(() => {
    getCount();
  }, [cart]);
  return (
    <div className="cart_button">
      <CartIcon className="cart_button__icon" />
      <Link className="cart_button__link" to={"/cart"} />
      {count > 0 ? <div className="cart_button__count">{count}</div> : <></>}
    </div>
  );
};
