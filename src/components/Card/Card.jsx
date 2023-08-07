/* eslint-disable react/prop-types */
import "./Card.scss";
import { Link } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";

function Card({ item }) {
  return (
    <Link to={`/product/${item?.id}`} className="link">
      <div className="card">
        <div className="image">
          <img src={item?.images[0]} alt="" className="mainImage" />
          <img src={item?.images[1]} alt="" className="secondImage" />
        </div>
        <h2>{item?.title}</h2>
        <div className="prices">
          <h3>
            <BsCurrencyRupee />
            {item?.price}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
