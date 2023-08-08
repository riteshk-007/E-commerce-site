import { useEffect, useState } from "react";
import "./Product.scss";

import { BsCurrencyRupee } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartReducer";

function Product() {
  const ID = useParams();
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const data = await fetch(`https://dummyjson.com/products/${ID.id}`);
        const res = await data.json();
        setProducts(res);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [ID.id]);
  return (
    <div className="product">
      <div className="left">
        <div className="mainImg">
          <img
            src={products?.images && products?.images[0]}
            alt={products?.title}
          />
        </div>
      </div>
      <div className="right">
        <h1> {products?.title}</h1>
        <span className="price">
          <BsCurrencyRupee />
          {products?.price}
        </span>
        <p>{products?.description}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          onClick={() => {
            dispatch(
              addToCart({
                id: products.id,
                title: products.title,
                desc: products.description,
                price: products.price,
                img: products.images[0],
                quantity,
              })
            );
            setQuantity(1);
          }}
        >
          <MdAddShoppingCart /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FiHeart /> ADD TO WISH LIST
          </div>
          <div className="item">
            <FaBalanceScale /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Category: {products?.category}</span>
          <span>Brand: {products?.brand}</span>
          <span>Rating: {products?.rating}</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <br />
          <span>{products?.description}</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
