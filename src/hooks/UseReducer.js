import { useReducer, useState } from "react";
import Modal from "./Modal";

const data = [
  { id: 1, name: "Namık" },
  { id: 2, name: "Suzan" },
  { id: 3, name: "Eda" },
  { id: 4, name: "Hakan" },
];

const reducer = (state, action) => {
  console.log(state, action);
  //   dispatch ile gönderilen nesneye bakar
  if (action.type === "TESTING") {
    // defaultState bir nesne ve onların eski özelliklerini koruyacağız
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "Person succesfully added...",
    };
  }
  return state;
};

// Default state'ler burada tanımlanır.
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello World!",
};

const UseReducer = () => {
  const [name, setName] = useState("");
  //   const [people, setPeople] = useState(data);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // dispatch hep nesne bekler ve type adında bir özelliği olmalı
      dispatch({ type: "TESTING" });
    } else {
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Please enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button>Add...</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};
export default UseReducer;
