import FoodShow from "./FoodShow";

const FoodList = ({ foods, onDelete }) => {
  const renderedFoods = foods.map((food) => {
    return <FoodShow food={food} key={food.id} onDelete={onDelete} />;
  });
  return <div className="food-list">{renderedFoods}</div>;
};
export default FoodList;
