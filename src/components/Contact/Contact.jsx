import "./Contact.scss";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGoogle,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email.." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <AiFillFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiOutlineGoogle />
          <BsPinterest />
        </div>
      </div>
    </div>
  );
}

export default Contact;
