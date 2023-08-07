/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetcData = async () => {
      try {
        const data = await fetch(
          "https://dummyjson.com/products?limit=4&skip=50&select=title,price,images,discountPercentage"
        );
        const res = await data.json();
        setProducts(res.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetcData();
  }, []);
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo
          molestiae cupiditate veniam sed voluptates, itaque aliquam mollitia
          quaerat odit! Magnam veniam, veritatis distinctio aut odio, laborum
          iste illo commodi saepe repudiandae iusto ab quisquam?
        </p>
      </div>
      <div className="bottom">
        {products?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
