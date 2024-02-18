import { useEffect, useState } from "react";
import FoodCreate from "./FoodCreate";
import FoodList from "./FoodList";
import axios from "axios";

const App = () => {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    const response = await axios.get("http://localhost:3001/foods");
    console.log(response.data);
    setFoods(response.data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const createFood = async (title) => {
    // // console.log(title, "sipariş eklendi");

    // // const updatedFoods = [...foods, {id:123, title:title}] - aşağıdaki ile aynı
    // const updatedFoods = [...foods, { id: crypto.randomUUID(), title }];
    // console.log(updatedFoods);
    // setFoods(updatedFoods);

    const response = await axios.post("http://localhost:3001/foods", { title });
    console.log(response.data);

    const updatedFoods = [...foods, response.data];
    setFoods(updatedFoods);
  };

  // tıklanan id'yi ana array'den çıkartmak için kullanılır
  const deleteFoodById = (id) => {
    const updatedFoods = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(updatedFoods);
  };

  const updateFoodById = (id, newTitle) => {
    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return { ...food, title: newTitle };
      }
      return food;
    });
    setFoods(updatedFoods);
  };

  return (
    <div className="app">
      {/* onCreate ve onDelete kendi isimlendirdiğimiz bir parametre, murat da yazabilirdik. */}

      <FoodCreate onCreate={createFood} foods={foods} />
      <FoodList
        foods={foods}
        onDelete={deleteFoodById}
        onUpdate={updateFoodById}
      />
    </div>
  );
};
export default App;
