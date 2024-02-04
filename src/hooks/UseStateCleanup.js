import { useEffect, useState } from "react";

const UseStateCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("Use Effect");
    window.addEventListener("resize", checkSize);
    // return () => {
    //   console.log("cleanup");
    //   window.removeEventListener("resize", checkSize);
    // };
  }, []);
  //   console.log(size);
  return (
    <>
      <h1>Window</h1>
      <h2>{size}px</h2>
    </>
  );
};
export default UseStateCleanup;
