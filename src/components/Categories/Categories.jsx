import { Link } from "react-router-dom";
import "./Categories.scss";

function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="link" to={"/products/1"}>
            <button>Sales</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1380599/pexels-photo-1380599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="link" to={"/products/1"}>
            <button>Women</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/157842/bezel-hairstyle-man-mode-157842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="link" to={"/products/1"}>
            <button>New Season</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2854841/pexels-photo-2854841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <Link className="link" to={"/products/1"}>
                <button>Men</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <Link className="link" to={"/products/1"}>
                <button>Accessories</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/7760803/pexels-photo-7760803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="link" to={"/products/1"}>
            <button>Shoes</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
