import { useState } from "react";

const FoodEdit = ({ food, showEdit, onUpdate }) => {
  const [title, setTitle] = useState(food.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showEdit((pre) => !pre);
    console.log("Yeni sipariş", title);
    onUpdate(food.id, title);
  };

  return (
    <form className="food-edit" onSubmit={handleSubmit}>
      <input className="input" onChange={handleChange} value={title} />
      <button className="button">Save</button>
    </form>
  );
};
export default FoodEdit;
