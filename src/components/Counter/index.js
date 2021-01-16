import React, { useState } from "react";

import Button from "../Button";

export default function Counter() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <h1>counter is : {count}</h1>
      <Button
        handelClick={() => {
          setCounter(count + 1);
        }}
        btnName="increment"
      >
        Increment
      </Button>

      <Button
        handelClick={() => {
          setCounter(count - 1);
        }}
        btnName="decrement"
      >
        Decrement
      </Button>
      <Button
        handelClick={() => {
          setCounter(0);
        }}
        btnName="reset"
      >
        reset
      </Button>
    </div>
  );
}
