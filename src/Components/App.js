import { useEffect, useContext } from "react";
import FoodCreate from "./FoodCreate";
import FoodList from "./FoodList";
import FoodContext from "@/context/foods";

const App = () => {
  const { fetchFoods } = useContext(FoodContext);

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="app">
      <FoodCreate />
      <FoodList />
    </div>
  );
};
export default App;
