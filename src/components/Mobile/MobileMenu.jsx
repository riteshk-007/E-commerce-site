/* eslint-disable react/prop-types */
import "./MobileMenu.scss";
import { Link } from "react-router-dom";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiSearch, HiOutlineUser } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function MobileMenu({ setShowMenu, setOpen, open, categories }) {
  return (
    <div className="mobile-view">
      <h3>FashHub</h3>
      <div className="menu">
        <div className="menu-item">
          <Link className="link" to={"/"} onClick={() => setShowMenu(false)}>
            Homepage
          </Link>
        </div>
        <div className="menu-item">
          <Link className="link" to={"/"} onClick={() => setShowMenu(false)}>
            About
          </Link>
        </div>
        <div className="menu-item">
          <Link className="link" to={"/"} onClick={() => setShowMenu(false)}>
            Contact
          </Link>
        </div>
        <div className="menu-item">
          <Link className="link" to={"/"} onClick={() => setShowMenu(false)}>
            Store
          </Link>
        </div>
        <div className="menu-icons">
          <HiSearch className="space" onClick={() => setShowMenu(false)} />
          <HiOutlineUser className="space" onClick={() => setShowMenu(false)} />
          <AiOutlineHeart
            className="space"
            onClick={() => setShowMenu(false)}
          />
          <div
            className="menu-cartIcon"
            onClick={() => {
              setOpen(!open);
              setShowMenu(false);
            }}
          >
            <AiOutlineShoppingCart className="space" />
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="second-menu">
        <div className="menu-item">
          <img src="/india.png" alt="india" className="menu-flag" />
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="menu-item">
          <span>IND</span>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="menu-item">
          <Link
            className="link"
            to={"/products/mens-shirts"}
            onClick={() => setShowMenu(false)}
          >
            Men
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="link"
            to={"/products/womens-dresses"}
            onClick={() => setShowMenu(false)}
          >
            Women
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="link"
            to={"/products/mens-shoes"}
            onClick={() => setShowMenu(false)}
          >
            Men Shoes
          </Link>
        </div>
        <div className="position">
          <div className="item item-category">
            Others <MdOutlineKeyboardArrowDown className="more" />
            <div className="more-category">
              {categories?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="link"
                    to={`/products/${item}`}
                    onClick={() => setShowMenu(false)}
                  >
                    <li>{item}</li>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
