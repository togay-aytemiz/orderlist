import React, { useState, useEffect } from "react";
import "./styles.css";

async function fetchCat() {
  try {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=8&size=full&breed_id=beng&sub_id=demo-ca06d4"
    );
    const cat = await res.json();
    // console.log(cat);
    const href = cat[0].url;
    return href;
  } catch (e) {}
}

export default function App() {
  const [cat, setCat] = useState();

  useEffect(() => {
    async function catFunction() {
      const resp = await fetchCat();
      console.log(resp);
      setCat(resp);
    }
    catFunction();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <img src={cat} alt="cat" width="300px" />
    </div>
  );
}
