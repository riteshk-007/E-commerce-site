import "./Navbar.scss";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiSearch, HiOutlineUser } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/india.png" alt="india" className="flag" />
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="item">
            <span>IND</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="item">
            <Link className="link" to={"/products/1"}>
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/2"}>
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/3"}>
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to={"/"}>
            FashRoom
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to={"/"}>
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/"}>
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/"}>
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/"}>
              Store
            </Link>
          </div>
          <div className="icons">
            <HiSearch />
            <HiOutlineUser />
            <AiOutlineHeart />
            <div className="cartIcon">
              <AiOutlineShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
