import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";
import { useEffect, useState } from "react";

function Products() {
  const { category } = useParams();
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const res = await data.json();
        setProducts(res.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1"> Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2"> Coats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3"> T-shirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={5000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="acs"
              value={"asc"}
              onChange={() => setSort("acs")}
            />
            <label htmlFor="acs"> Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value={"desc"}
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc"> Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/7679827/pexels-photo-7679827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="categoryImg"
          className="catImg"
        />
        <List products={products} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}

export default Products;
