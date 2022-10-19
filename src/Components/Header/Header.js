import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "./../../Redux/Actions/ProductAction";
function Header() {
  const result = useSelector((state) => state?.cartReducer);
  const dispatch = useDispatch();
  console.log("🚀 ~ file: Header.js ~ line 6 ~ Header ~ result", result);
  return (
    <div className="header">
      <Link to={"/"}>
        {" "}
        <h1 className="logo">E-COMMERCE</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          onChange={(event) => {
            dispatch(productSearch(event.target.value));
          }}
          placeholder="search product"
        />
      </div>
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
