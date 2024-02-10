import { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("Engin");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  const [isError, setIsError] = useState(false);

  return (
    <>
      <button onClick={() => setIsError((pre) => !pre)}>Toggle Error</button>
      {isError ? <h1>Error...</h1> : <h1>Success...</h1>}
    </>
  );
};
export default ShortCircuit;
