import FoodContext from "@/context/foods";
import { useState, useContext } from "react";

const FoodEdit = ({ food, showEdit }) => {
  const { updateFoodById } = useContext(FoodContext);

  const [title, setTitle] = useState(food.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    showEdit();
    updateFoodById(food.id, title);
  };

  return (
    <form className="food-edit" onSubmit={handleSubmit}>
      <input className="input" onChange={handleChange} value={title} />
      <button className="button">Save</button>
    </form>
  );
};
export default FoodEdit;
