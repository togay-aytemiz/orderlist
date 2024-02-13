import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // console.log(ref.current.offsetHeight);
    setHeight(ref.current.offsetHeight);
  });

  return (
    <div ref={ref}>
      <h2>Hello world </h2>
      <h2>Hello world </h2>
      Height: {height}px
    </div>
  );
}
