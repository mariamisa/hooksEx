import React from "react";

export default function Button({ handelClick, btnName, children, otherProps }) {
  return (
    <button onClick={handelClick} name={btnName} {...otherProps}>
      {children}
    </button>
  );
}
