import { useState } from "react";
import FoodCreate from "./FoodCreate";

const App = () => {
  const [foods, setFoods] = useState();
  const createFood = (title) => {
    console.log(title, "sipariş eklendi");
  };
  return (
    <>
      <FoodCreate onCreate={createFood} />
      {/* onCreate kendi isimlendirdiğimiz bir parametre, murat da yazabilirdik. */}
    </>
  );
};
export default App;
