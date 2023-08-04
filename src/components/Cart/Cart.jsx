/* eslint-disable react/prop-types */
import "./Cart.scss";

import { MdDeleteOutline, MdClose } from "react-icons/md";
function Cart({ setOpen }) {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1057117/pexels-photo-1057117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1057181/pexels-photo-1057181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "red T-shirt",
      desc: "red T-shirt",
      isNew: true,
      oldPrice: 499,
      price: 399,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2435198/pexels-photo-2435198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2435200/pexels-photo-2435200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Women's Regular Fit Shirt",
      desc: "Women's Regular Fit Shirt",
      isNew: true,
      oldPrice: 789,
      price: 699,
    },
  ];
  return (
    <div className="cart">
      <h1 className="heading">
        <span>Products in your cart</span>
        <span className="close" onClick={() => setOpen(false)}>
          <MdClose />
        </span>
      </h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price"> 1 × ₹{item.price}</div>
          </div>
          <MdDeleteOutline className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹ 499</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <sapn className="reset">Reset Cart</sapn>
    </div>
  );
}

export default Cart;
