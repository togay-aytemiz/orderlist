export const reducer = (state, action) => {
  console.log(state, action);
  //   dispatch ile gönderilen nesneye bakar
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];

    // defaultState bir nesne ve onların eski özelliklerini koruyacağız
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "Person succesfully added...",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Lütfen bir isim giriniz",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return {
      ...state,
      people: newPeople,
    };
  }
  return state;
  // Hata mesajı da döndürebiliriz eğer eşleşen type olmazsa
  // throw new Error("eşleşen işlem yok");
};
