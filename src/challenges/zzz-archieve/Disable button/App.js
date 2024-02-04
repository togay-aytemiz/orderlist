import { useState } from "react";
import "./styles.css";

/**
 Giriş alanında karakter olmadığında Submit butonunu devre dışı bırakın.
  En az bir karakter olduğunda Submit butonunu etkinleştirin 
  (butonun devre dışı bırakılmasını kaldırın).
  
**/

export default function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value.length > 0 && <button>Submit</button>}
    </>
  );
}
