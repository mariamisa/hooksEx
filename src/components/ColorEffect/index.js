import React, { useState, useEffect } from "react";

export default function ColorEffect() {
  const w = window.innerWidth;

  const [x, setX] = useState();
  const [y, setY] = useState();

  const handelXY=({ clientX, clientY }) => {
    setX(clientX);
    setY(clientY);
  }

  useEffect(() => {
    document.addEventListener("mousemove", handelXY);
    return ()=>{
        document.removeEventListener('mousemove',handelXY)
    }
  }, [x, y]);
  return (
    <div
      style={{ backgroundColor: x > w / 2 ? "blue" : "tomato" }}
    >
      <p>
        ia an now on x: {x} and y : {y}
      </p>
    </div>
  );
}
