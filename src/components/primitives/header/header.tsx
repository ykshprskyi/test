import React from "react";
//@ts-ignore
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { CartButton } from "../cartButton/cartButton";
import { AuthButton } from "../authButton/authButton";
import { Link } from "react-router-dom";
import "./header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header_left">
        <div className="header_logo">
          <div className="header_logo__icon">
            <Logo />
          </div>
          <div className="header_logo__title">Grocery store</div>
          <Link className="header_logo__link" to={"/products"} />
        </div>
      </div>
      <div className="header_right">
        <div className="header_auth">
          <AuthButton />
        </div>
        <div className="header_cart">
          <CartButton />
        </div>
      </div>
    </header>
  );
};
