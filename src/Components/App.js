import { useState } from "react";
import FoodCreate from "./FoodCreate";
import FoodList from "./FoodList";

const App = () => {
  const [foods, setFoods] = useState([]);

  const createFood = (title) => {
    // console.log(title, "sipariş eklendi");

    // const updatedFoods = [...foods, {id:123, title:title}] - aşağıdaki ile aynı
    const updatedFoods = [...foods, { id: crypto.randomUUID(), title }];
    console.log(updatedFoods);
    setFoods(updatedFoods);
  };

  // tıklanan id'yi ana array'den çıkartmak için kullanılır
  const deleteFoodById = (id) => {
    const updatedFoods = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(updatedFoods);
  };

  return (
    <div className="app">
      {/* onCreate ve onDelete kendi isimlendirdiğimiz bir parametre, murat da yazabilirdik. */}

      <FoodCreate onCreate={createFood} foods={foods} />
      <FoodList foods={foods} onDelete={deleteFoodById} />
    </div>
  );
};
export default App;
