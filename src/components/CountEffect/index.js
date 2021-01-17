import React, { useEffect, useState } from "react";

export default function CountEffect() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    document.addEventListener('mousedown',incrementCount)
    return ()=>{
      document.removeEventListener("mousedown", incrementCount)
    }
  }, [count]);

  return (
    <div>
      <p>The Counter state is: {count}</p>
    </div>
  );
}
