import { useState } from "react";
import { Input } from "./Input";
import "./styles.css";
function App() {
  const [colors, setColors] = useState([]);
  const [newColor, setNewColor] = useState("");

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
    // Yapılacak: 'color'ın --sonuna-- 'newColor'i ekleyin
    // ve state'i güncelleyin
  };

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Input
        onSubmit={addColor}
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <ul>{renderedColors}</ul>
    </div>
  );
}

export default App;
