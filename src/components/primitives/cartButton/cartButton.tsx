import React from "react";
import { ReactComponent as CartIcon } from "../../../assets/images/cart.svg";
import { Link } from "react-router-dom";
import "./cartButton.scss";

export const CartButton: React.FC = () => {
  return (
    <div className="cart_button">
      <CartIcon className="cart_button__icon" />
      <Link className="cart_button__link" to={"/cart"} />
    </div>
  );
};
