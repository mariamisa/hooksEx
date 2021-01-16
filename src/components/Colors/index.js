import React, { useState } from "react";

import Button from "../Button";

export default function Color() {
  const colorList = ["red", "blue", "green", "yellow"];

  const [color, setColor] = useState("red");

  const handelClick = (color) => setColor(color);

  return (
    <div style={{ backgroundColor: color }}>
      {colorList.map((colorItem,index) => (
        <Button key={index.toString()}
          handelClick={({ target: { name } }) => handelClick(name)}
          btnName={colorItem}
        >
          {colorItem.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
