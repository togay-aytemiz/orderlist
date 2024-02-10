import { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    if (name && email) {
      console.log("formu gönder");
      const person = { id: crypto.randomUUID(), name: name, email: email };
      const newArr = [...people, person];
      setPeople(newArr);
      console.log(newArr);
      setName("");
      setEmail("");
    } else {
      console.log("boş değerler");
    }
  };
  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              id="name"
              placeholder="enter name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="text"
              id="email"
              placeholder="enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button>Kişi ekle</button>
        </form>
        <hr />
        <h2 style={{ fontWeight: "bold" }}>Listedekiler</h2>
        <ul>
          {people.map((person) => {
            const { name, email, id } = person;
            return (
              <div key={id}>
                <li>
                  {name} {email}
                </li>
              </div>
            );
          })}
        </ul>
      </article>
    </>
  );
};
export default ControlledInput;
