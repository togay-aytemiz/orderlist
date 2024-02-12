import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState();

  const [surname, setSurname] = useState();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <label>
          İsim
          <input onChange={(e) => setName(e.target.value)} value={name} />
        </label>
      </div>
      <div>
        <label>
          Soyisim
          <input onChange={(e) => setSurname(e.target.value)} value={surname} />
        </label>
      </div>
      <div />
    </div>
  );
}
