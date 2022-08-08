import { useDispatch } from "react-redux";
import { addTcart, EmptyCart, romovedCart } from "./../../Redux/Actions/action";

function Main() {
  const dispatch = useDispatch();

  const product = {
    name: "mobile",
    type: "iphone",
    color: "black",
  };
  return (
    <div>
      <button onClick={() => dispatch(addTcart(product))}>add cart</button>
      <button onClick={() => dispatch(romovedCart(product.name))}>
        Remove from cart
      </button>
      <button onClick={() => dispatch(EmptyCart())}>Reset cart</button>
    </div>
  );
}

export default Main;
