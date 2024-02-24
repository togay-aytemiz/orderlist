import { useState, useContext } from "react";
import FoodEdit from "./FoodEdit";
import FoodContext from "@/context/foods";

const FoodShow = ({ food }) => {
  const { deleteFoodById } = useContext(FoodContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteFoodById(food.id);
  };

  const handleEditClick = () => {
    setShowEdit((pre) => !pre);
  };

  const handleSubmit = () => {
    setShowEdit(false);
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
