import { useState } from "react";
import "./styles.css";

/**
   Kullanıcı, girişte herhangi bir karakteri yazabilmeli ve 
   bu karakterler tarayıcıda gösterilmelidir.

**/

export default function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </>
  );
}
