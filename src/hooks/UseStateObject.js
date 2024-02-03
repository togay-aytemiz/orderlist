import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Murat",
    age: 37,
    text: "Hello",
  });
  console.log(person);

  const changeText = () => {
    setPerson({ ...person, text: "Hello World" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.text}</h3>
      <button onClick={changeText}>Metni Değiştir</button>
    </>
  );
};
export default UseStateObject;
