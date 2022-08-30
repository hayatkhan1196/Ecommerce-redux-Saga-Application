import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const result = useSelector((state) => state?.cartReducer);
  console.log("🚀 ~ file: Header.js ~ line 6 ~ Header ~ result", result);
  return (
    <div className="header">
      <Link to={"/"}>
        {" "}
        <h1 className="logo">E-COMMERCE</h1>
      </Link>

      <Link to="/cart">
        <div className="cart_div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="image"
          />
        </div>
      </Link>
    </div>
  );
}

export default Header;
