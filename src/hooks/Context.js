import { useState, useContext, createContext } from "react";

const data = [
  { id: 1, name: "Namık" },
  { id: 2, name: "Suzan" },
  { id: 3, name: "Eda" },
  { id: 4, name: "Hakan" },
];

const PersonContext = createContext();
// İki bileşenle gelir - provider ve consumer

const Context = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson }}>
      <h3 style={{ marginBottom: "1rem", fontWeight: "bold" }}>Context</h3>
      <List people={people} />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  console.log(removePerson);
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "0.5rem",
        alignItems: "center",
      }}
    >
      <button onClick={() => removePerson(id)}>Kaldır</button>

      <h4>{name}</h4>
    </div>
  );
};

export default Context;
