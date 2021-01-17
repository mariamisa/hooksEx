import React from "react";

export default function Input({ handelChange, inputName,placeholder,type, otherProps }) {
  return (
    <input onChange={handelChange} placeholder={placeholder} type={type} name={inputName} {...otherProps} />
  );
}
