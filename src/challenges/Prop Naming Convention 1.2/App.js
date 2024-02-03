import { useState } from "react";
import { Slider } from "./Slider";
import "./styles.css";

function App() {
  const [age, setAge] = useState(20);

  const handleAgeChange = (newAge) => {
    setAge(newAge);
  };

  return <Slider value={age} onChange={handleAgeChange} />;
}

export default App;
