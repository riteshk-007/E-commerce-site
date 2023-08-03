import "./List.scss";
import Card from "../Card/Card";

function List() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1057117/pexels-photo-1057117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1057181/pexels-photo-1057181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "red T-shirt",
      isNew: true,
      oldPrice: 499,
      price: 399,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2435198/pexels-photo-2435198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2435200/pexels-photo-2435200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Women's Regular Fit Shirt",
      isNew: true,
      oldPrice: 789,
      price: 699,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1080122/pexels-photo-1080122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "La Zoire V-neck Top with Flared Sleeves For Women",
      oldPrice: 599,
      price: 449,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/921647/pexels-photo-921647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "VICI Kinzie Tencel Pocketed Button Down Top",
      isNew: true,
      oldPrice: 999,
      price: 789,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;