import { useState } from "react";
import FoodEdit from "./FoodEdit";

const FoodShow = ({ food, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(food.id);
  };

  const handleEditClick = () => {
    setShowEdit((pre) => !pre);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onUpdate(id, newTitle);
  };

  let content = showEdit ? (
    <FoodEdit food={food} showEdit={handleSubmit} />
  ) : (
    <h3>{food.title}</h3>
  );

  return (
    <div className="food-show">
      <div
        className="food-background"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${food.id}/300/)`,
        }}
      ></div>
      <div className="food-content">{content}</div>

      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>

        {/* <button className="delete" onClick={() => onDelete(food.id)}>Delete</button> */}
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default FoodShow;
