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

  const handleSave = () => {
    setShowEdit(false);
  };

  let content = showEdit ? (
    <FoodEdit food={food} showEdit={handleSave} onUpdate={onUpdate} />
  ) : (
    <h3>{food.title}</h3>
  );

  return (
    <div className="food-show">
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
