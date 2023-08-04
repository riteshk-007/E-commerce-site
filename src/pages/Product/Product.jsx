import { useEffect, useState } from "react";
import "./Product.scss";

import { BsCurrencyRupee } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/1080122/pexels-photo-1080122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/921647/pexels-photo-921647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onMouseEnter={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onMouseEnter={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1> Title</h1>
        <span className="price">
          <BsCurrencyRupee />
          499
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
          dolore, sunt sequi quos obcaecati, magnam nemo eius, quae beatae
          libero eum eligendi. Pariatur ipsam consectetur nam dolorem quae
          tenetur quod doloremque tempore esse, dolorum, illum, hic
          necessitatibus! Blanditiis, error.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
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
          <span>Vendor: polo</span>
          <span>Product type: T-shirt</span>
          <span>Tag: T-shirt, women, top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
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
