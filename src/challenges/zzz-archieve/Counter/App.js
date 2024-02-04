import { useState } from "react";
import "./styles.css";

/**
'Arttır' butonuna tıklamak, sayaç sayısını bir artırmalıdır. `Azalt` bir azaltmalıdır.
**/

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter((pre) => pre + 1);
  };

  const handleDecrease = () => {
    setCounter((pre) => pre - 1);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrease}>Arttır</button>
      <button onClick={handleDecrease}>Azalt</button>
    </div>
  );
};

export default App;
