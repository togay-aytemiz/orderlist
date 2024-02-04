import { useState } from "react";

const FoodEdit = ({ food, showEdit }) => {
  const [title, setTitle] = useState(food.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Yeni sipariş", title);
    // onUpdate(food.id, title);
    showEdit(food.id, title);
  };

  return (
    <form className="food-edit" onSubmit={handleSubmit}>
      <input className="input" onChange={handleChange} value={title} />
      <button className="button">Save</button>
    </form>
  );
};
export default FoodEdit;
