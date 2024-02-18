import { useState } from "react";

const data = [
  { id: 1, name: "Namık" },
  { id: 2, name: "Suzan" },
  { id: 3, name: "Eda" },
  { id: 4, name: "Hakan" },
];

const PropDrill = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3 style={{ marginBottom: "1rem", fontWeight: "bold" }}>PropDrill</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
      <button onClick={() => removePerson(id)}>Kaldır</button>

      <h4>{name}</h4>
    </div>
  );
};

export default PropDrill;
