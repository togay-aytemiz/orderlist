import { useEffect, useState } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect çağırıldı");
    if (value > 0) {
      document.title = `Yeni mesajlar (${value})`;
    }
  }, [value]);

  console.log("Bileşen render edildi");
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue((pre) => pre + 1)}>+1</button>
    </>
  );
};
export default UseEffectBasic;
