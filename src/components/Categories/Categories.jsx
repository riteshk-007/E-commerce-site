import { Link } from "react-router-dom";
import "./Categories.scss";
import { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetcData = async () => {
      try {
        const data = await fetch("https://dummyjson.com/products/categories");
        const res = await data.json();
        const Cate = res.slice(8, 14);
        setCategories(Cate);
      } catch (error) {
        console.log(error);
      }
    };

    fetcData();
  }, []);
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="link" to={`/products/${categories[1]}`}>
            <button>Womens Dresses</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1446524/pexels-photo-1446524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="link" to={`/products/${categories[1]}`}>
            <button>Women Shoes</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2313192/pexels-photo-2313192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="link" to={`/products/${categories[2]}`}>
            <button>Men Shirts</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/4252993/pexels-photo-4252993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <Link className="link" to={`/products/${categories[3]}`}>
                <button>Men Shoes</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/447570/pexels-photo-447570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <Link className="link" to={`/products/${categories[4]}`}>
                <button>Men Watches</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="link" to={`/products/${categories[5]}`}>
            <button>Women Watches</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
