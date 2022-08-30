import { useDispatch } from "react-redux";
import { productList } from "../../Redux/Actions/ProductAction";
import { addTcart, EmptyCart, romovedCart } from "./../../Redux/Actions/action";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

function Main() {
  const productData = useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      {/* <button onClick={() => dispatch(addTcart(product))}>add cart</button>
      <button onClick={() => dispatch(romovedCart(product.name))}>
        Remove from cart
      </button> */}
      <button onClick={() => dispatch(EmptyCart())}>Reset cart</button>
      <div className="product-container">
        {productData.map((item, index) => (
          <div className="product-item" key={index}>
            <img src={item.photo} />

            <div>Name: {item.name}</div>
            <div>Name: {item.name}</div>

            <div>Brand: {item.brand}</div>

            <div>category: {item.category}</div>

            <div>price: {item.price}</div>
            <div>color: {item.color}</div>
            <div>
              <button onClick={() => dispatch(addTcart(item))}>
                Add to cart
              </button>
              <button onClick={() => dispatch(romovedCart(item.id))}>
                Remove to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
