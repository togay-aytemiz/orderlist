import { useState } from "react";

const peopleData = [
  { id: 1, name: "murat" },
  { id: 2, name: "namık" },
  { id: 3, name: "suzan" },
  { id: 4, name: "eda" },
];

const UseStateArray = () => {
  const [people, setPeople] = useState(peopleData);
  console.log(people);

  const removePerson = (id) => {
    let newArr = people.filter((person) => person.id !== id);
    setPeople(newArr);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name: user } = person;
        return (
          <div key={id}>
            <h4>{user}</h4>
            <button onClick={() => removePerson(id)}>Kaldır</button>
          </div>
        );
      })}

      <br />
      <hr />
      <br />
      <button onClick={() => setPeople([])}>Sil</button>
    </>
  );
};
export default UseStateArray;
