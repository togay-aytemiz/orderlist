import { useContext } from "react";
import FoodContext from "@/context/foods";

import FoodShow from "./FoodShow";

const FoodList = () => {
  const { foods } = useContext(FoodContext);

  const renderedFoods = foods.map((food) => {
    return <FoodShow food={food} key={food.id} />;
  });

  return <div className="food-list">{renderedFoods}</div>;
};

export default FoodList;
