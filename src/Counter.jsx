import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Steps {step} </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Counter {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <h3>
        <span>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} day(s) from Today is `
            : `${Math.abs(count)} day(s) ago was  `}
        </span>
        <span>{date.toDateString()} </span>
      </h3>
      {step > 0 || count > 0 ? (
        <button onClick={() => setCount(0)}>Reset</button>
      ) : (
        " "
      )}
    </>
  );
}
