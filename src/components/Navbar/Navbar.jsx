import "./Navbar.scss";
import MobileMenu from "../Mobile/MobileMenu";

import { MdOutlineKeyboardArrowDown, MdClose } from "react-icons/md";
import { HiSearch, HiOutlineUser } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";

import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
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
            FashHub
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
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <AiOutlineShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart setOpen={setOpen} />}
      <div className="menu">
        {showMenu ? (
          <div className="menuback">
            <MdClose onClick={() => setShowMenu(false)} className="close" />
            <MobileMenu
              setShowMenu={setShowMenu}
              setOpen={setOpen}
              open={open}
            />
          </div>
        ) : (
          <CgMenuRightAlt onClick={() => setShowMenu(true)} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
