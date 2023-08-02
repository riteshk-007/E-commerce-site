/* eslint-disable react/prop-types */
import "./Card.scss";
import { Link } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";

function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImage" />
          <img src={item.img2} alt="" className="secondImage" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>
            <BsCurrencyRupee />
            {item.oldPrice}
          </h3>
          <h3>
            <BsCurrencyRupee />
            {item.price}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
