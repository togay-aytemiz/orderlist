const FoodShow = ({ food, onDelete }) => {
  const handleClick = () => {
    onDelete(food.id);
  };

  return (
    <div className="food-show">
      {food.title}
      <div className="actions">
        {/* <button className="delete" onClick={() => onDelete(food.id)}>
          Delete
        </button> */}
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default FoodShow;
