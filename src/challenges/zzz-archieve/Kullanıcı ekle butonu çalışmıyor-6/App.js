import { useState } from "react";
import "./styles.css";

export default function App() {
  const users = useState();
  function addUser() {
    users.push({
      name: "Engin"
    });
  }
  return (
    <div className="App">
      <h1>Kullanıcı Ekleyin</h1>
      <div>
        <button style={{ fontSize: "24px" }} onClick={addUser}>
          Kullanıcı ekle
        </button>
      </div>
      <h2> {users ? users.length : 0} kullanıcı var </h2>
    </div>
  );
}
