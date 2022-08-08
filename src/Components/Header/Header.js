import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const result = useSelector((state) => state?.cartReducer);
  console.log("🚀 ~ file: Header.js ~ line 6 ~ Header ~ result", result);
  return (
    <div className="header">
      <div className="cart_div">
        <span>{result.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Header;
