import axios from "axios";
import { createContext, useState } from "react";

const FoodContext = createContext();

const AppProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    const response = await axios.get("http://localhost:3001/foods");
    console.log(response.data);
    setFoods(response.data);
  };

  const createFood = async (title) => {
    const response = await axios.post("http://localhost:3001/foods", { title });
    console.log(response.data);

    const updatedFoods = [...foods, response.data];
    setFoods(updatedFoods);
  };

  const deleteFoodById = async (id) => {
    await axios.delete(`http://localhost:3001/foods/${id}`);

    const updatedFoods = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(updatedFoods);
  };

  const updateFoodById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/foods/${id}`, {
      title: newTitle,
    });

    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return { ...food, ...response.data };
      }
      return food;
    });
    setFoods(updatedFoods);
  };

  const valueToShare = {
    foods,
    fetchFoods,
    createFood,
    deleteFoodById,
    updateFoodById,
  };

  return (
    <FoodContext.Provider value={valueToShare}>{children}</FoodContext.Provider>
  );
};

export { AppProvider };
export default FoodContext;
