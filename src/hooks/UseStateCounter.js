import { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  //   const handleUpdate = () => {
  //     setValue((pre) => pre + 1);
  //     setValue((p) => p + 1);
  //   };

  const increase = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((pre) => pre + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 2rem" }}>
        <h1>Counter</h1>
        <h2>{value}</h2>
        {/* <button onClick={() => setValue(value - 1)}>-</button> */}
        <button onClick={() => setValue((pre) => pre - 1)}>-</button>
        <button onClick={() => setValue(0)}>Reset</button>
        {/* <button onClick={handleUpdate}>+</button> */}
        <button onClick={() => setValue((pre) => pre + 1)}>+</button>
      </section>

      <section style={{ margin: "4rem 2rem" }}>
        <h1>Counter 2</h1>
        <h2>{value}</h2>
        <button onClick={increase}>⌛</button>
      </section>
    </>
  );
};
export default UseStateCounter;
