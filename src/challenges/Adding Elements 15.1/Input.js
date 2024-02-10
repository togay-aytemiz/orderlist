import React from "react";

function Input({ onSubmit }) {
  const [text, setText] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Renk</label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button>Ekle</button>
    </form>
  );
}

export { Input };
