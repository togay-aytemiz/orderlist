import { useState } from "react";
import "./styles.css";
export default function App() {
  const [style, setStyle] = useState(false);

  const handleStyleChange = () => {
    setStyle((pre) => !pre);
  };

  return (
    <div>
      <p className={style ? "active" : ""}>Style ver</p>
      <button onClick={handleStyleChange}>Toggle style</button>
    </div>
  );
}
