import { useState } from "react";
import "./styles.css";

function App() {
  // KODUNUZ  BURADA OLACAK

  const [name, setName] = useState("");
  const [age, setAge] = useState();

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Inputtan Verileri Güncelleme</h2>
      </div>

      {/* Verileri Göster */}
      <div className="input-display">
        <p>İsmi Göster: {name}</p>
        <p>Yaşı Göster: {age}</p>
      </div>

      {/* Kullanıcı Girdilerini Toplayın */}
      <div className="inputs">
        {/* isim input */}
        <div className="field">
          <label className="label">İsmi: </label>
          <input
            className="input"
            type="text"
            placeholder="Namık"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* yaş input */}
        <div className="field">
          <label className="label">Yaşı: </label>
          <input
            className="input"
            type="number"
            placeholder="28"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
