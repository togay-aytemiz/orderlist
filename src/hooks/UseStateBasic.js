import { useState } from "react";

const UseStateBasic = () => {
  //   console.log(useState("Hello"));
  //   const state = useState(1)[0];
  //   const setter = useState(1)[1];
  //   console.log(setter);
  const [text, setText] = useState("Engin");
  const handleClick = () => {
    if (text === "Engin") {
      setText("Namık");
    } else {
      setText("Engin");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleClick}>Başlığı Değiştir</button>
    </>
  );
};
export default UseStateBasic;
