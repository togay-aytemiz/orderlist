import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState();

  function onChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <label>
          İsim
          <input onChange={onChange} value={name} />
        </label>
      </div>
      <div>
        <label>
          Soyisim
          <input onChange={onChange} value={name} />
        </label>
      </div>
      <div />
    </div>
  );
}
