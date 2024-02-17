import { useReducer, useState, useEffect, useRef } from "react";
import { reducer } from "./Reducer";
import Modal from "./Modal";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: crypto.randomUUID(), name: name }; //Sadece name de yazabilirdik, 2 kere name yazmak yerine.

      // dispatch hep nesne bekler ve type adında bir özelliği olmalı
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const refContainer = useRef(null);

  useEffect(() => {
    // console.log(refContainer.current);
    refContainer.current.focus();
  });

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Please enter your name"
            onChange={(e) => setName(e.target.value)}
            ref={refContainer}
          />
        </div>
        <button>Add...</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};
export default UseReducer;
