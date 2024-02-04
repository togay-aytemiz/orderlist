import { useState } from "react";

function NewItemForm({ handleAddItem }) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        handleAddItem(value);
        setValue("");
      }}
    >
      {/* Bu ID meselesine daha sonra da değineceğiz! */}
      <label htmlFor="new-item-input">Madde:</label>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button>Ekle</button>
    </form>
  );
}

export default NewItemForm;
