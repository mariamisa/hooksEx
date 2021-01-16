import React from "react";

export default function Input({ handelChange, inputName, otherProps }) {
  return (
    <input onChange={handelChange} name={inputName} {...otherProps} />
  );
}
