import React from "react";
import { useCounter } from "./storeApi";

export const ChildComponent = () => {
  
  const {count, message, increment, decrement, reset} = useCounter();

  return (
    <div style={{border: '1px solid red', width: '50%', margin: '5em auto', padding: '1em'}}>
      Number: {count}
      <br />
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}> Reset</button>
      <br />
      Message: {message}
    </div>
  )
}
