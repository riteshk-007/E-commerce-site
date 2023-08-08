/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";

import { MdDeleteOutline, MdClose } from "react-icons/md";
import { removeItem, resetCart } from "../../Redux/CartReducer";
function Cart({ setOpen }) {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <h1 className="heading">
        <span>Products in your cart</span>
        <span className="close" onClick={() => setOpen(false)}>
          <MdClose />
        </span>
      </h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} × ₹{item.price}
            </div>
          </div>
          <MdDeleteOutline
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹ {totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <sapn className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </sapn>
    </div>
  );
}

export default Cart;
