import FoodContext from "@/context/foods";
import { useState, useContext } from "react";

const FoodCreate = () => {
  const { foods, createFood } = useContext(FoodContext);

  // Input'a yazılan bilgilerin state içerisine tutulmasını sağlar
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // Buttona basıldığında ne olacağı
  const handleSubmit = (e) => {
    e.preventDefault();
    createFood(title);
    setTitle("");
  };
  return (
    <div className="food-create">
      <h3>Sipariş Listesi {foods.length > 0 && `(${foods.length})`}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sipariş giriniz"
          className="input"
          onChange={handleChange}
          value={title}
        />
        <button className="orderBtn button">Siparişi Gönder</button>
      </form>
    </div>
  );
};
export default FoodCreate;
