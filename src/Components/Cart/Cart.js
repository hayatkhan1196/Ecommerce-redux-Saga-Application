import { Link, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../Redux/Actions/ProductAction";

function Cart() {
  const cartData = useSelector((state) => state?.cartReducer);
  console.log("🚀 ~ file: Cart.js ~ line 8 ~ Cart ~ cartData", cartData);
  let arrayData = cartData.map((a, i) => a.price);
  var Amount = arrayData.reduce(function (prev, curr) {
    return (Number(prev) || 0) + (Number(curr) || 0);
  }, 0);
  console.log("🚀 ~ file: Cart.js ~ line 14 ~ Amount ~ Amount", Amount);
  // let Amount =
  //   cartData.length && cartData.reduce((prev, next) => prev + next, 0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <Link to={"/"}>Product-list</Link>
      <h1>cart page</h1>
      <div className="car-page-conatiner">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {cartData &&
            cartData.map((items, index) => (
              <tr key={index.id}>
                <td>{items.name}</td>
                <td>{items.color}</td>
                <td>{items.price}</td>
                <td>{items.brand}</td>
                <td>{items.category}</td>
              </tr>
            ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{Amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{Amount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>0000</span>
          </div>

          <div className="adjust-price">
            <span>Total</span>
            <span>{Amount - Amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
