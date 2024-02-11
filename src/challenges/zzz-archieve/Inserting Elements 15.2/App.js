import { useState } from "react";
import { Input } from "./Input";
import "./styles.css";
function App() {
  const [colors, setColors] = useState([]);

  const addColorAtIndex = (newColor, index) => {
    // Yapılacaklar: Belirlenen 'index'teki 'colors'a 'newColor'i ekleyin
    // ve state'i güncelleyin
    setColors([...colors.slice(0, index), newColor, ...colors.slice(index)]);
  };

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColorAtIndex} max={colors.length} />
      <ul>{renderedColors}</ul>
    </div>
  );
}

export default App;
