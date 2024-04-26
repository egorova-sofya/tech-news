import { useState } from "react";
import s from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button className={s.button} onClick={() => setCounter(counter + 1)}>
        Counter
      </button>
    </>
  );
};
