import { useState } from "react";
import { Input } from "./Input";
import { RemoveForm } from "./RemoveForm";
import "./styles.css";
function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const removeColorAtIndex = (indexToRemove) => {
    // Yapılacaklar: 'indexToRemove' konumundaki elementi kaldırın
    // 'setColors'ı çağırarak state'i güncellemeyi unutmayın
    const newArr = colors.filter((color, index) => index !== indexToRemove);
    setColors(newArr);
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const renderedColors = colors.map((color) => {
    return <li key={crypto.randomUUID()}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
      <hr />
      <RemoveForm onSubmit={removeColorAtIndex} max={colors.length} />
    </div>
  );
}

export default App;
