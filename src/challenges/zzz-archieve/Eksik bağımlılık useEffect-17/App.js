import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(arr);
  }, [arr]);

  return <div className="App"></div>;
}
