/* eslint-disable react/prop-types */
import "./List.scss";
import Card from "../Card/Card";

function List({ products }) {
  return (
    <div className="list">
      {products && products.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default List;
