import { useState } from "react";
import ShoppingList from "./ShoppingList";
import NewItemForm from "./NewItemForm";
import "./styles.css";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(value) {
    const updatedItems = [...items, value];
    console.log(updatedItems);
    setItems(updatedItems);
  }

  return (
    <div>
      {items.length > 0 && <ShoppingList items={items} />}
      <NewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
