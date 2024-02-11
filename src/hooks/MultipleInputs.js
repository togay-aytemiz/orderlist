import { useState } from "react";

const MultipleInputs = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [age, setAge] = useState("");

  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("name", name);
  //     console.log("email", email);
  //     if (name && email) {
  //       console.log("formu gönder");
  //       const person = {
  //         id: crypto.randomUUID(),
  //         name: name,
  //         email: email,
  //         age: age,
  //       };
  //       const newArr = [...people, person];
  //       setPeople(newArr);
  //       console.log(newArr);
  //       setName("");
  //       setEmail("");
  //       setAge("");
  //     } else {
  //       console.log("boş değerler");
  //     }
  //   };

  const handleChange = (e) => {
    const inputName = e.target.name;
    // console.log(name);
    const value = e.target.value;
    // console.log(value);
    setPerson({ ...person, [inputName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newPerson = { id: crypto.randomUUID(), ...person };
      const newPeopleArr = [...people, newPerson];
      setPeople(newPeopleArr);
      setPerson({ name: "", email: "", age: "" });
    }
  };

  //   console.log(people);

  return (
    <>
      <article>
        <form>
          <div>
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>

          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="text"
              id="email"
              placeholder="Email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="number"
              id="age"
              placeholder="Age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button onClick={handleSubmit}>Kişi ekle</button>
        </form>
        <hr />
        <h2 style={{ fontWeight: "bold" }}>Listedekiler</h2>
        <ul>
          {people.map((person) => {
            const { name, email, id, age } = person;
            return (
              <div key={id}>
                <li>
                  {name} {email} {age}
                </li>
              </div>
            );
          })}
        </ul>
      </article>
    </>
  );
};
export default MultipleInputs;
