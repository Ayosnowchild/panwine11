import React from "react";
import { CartIcon, PanIcon } from "../icons";
import Button from "../Button/button";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav-main">
      <div className="nav-upper">
        <p>Home</p>
        <p>Products</p>
        <p>Support</p>
      </div>
      <div className="nav-low">
        <PanIcon />
        <input placeholder="Search" />
        <div className="low-flex">
          <div className="cart-box">
            <CartIcon />
          </div>
          <Button title={"Login"} btnType={"pry"} className={"low-btn"} />
          <Button title={"Sign Up"} btnType={"pry"} className={"low-btn"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
