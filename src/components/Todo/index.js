import React, { useState } from "react";

import Input from "../InputFeild";
import Button from "../Button";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [idCount, setIdCount] = useState(1);

  const addTodo = () => {
    setTodo([...todo, { id: idCount, description: inputValue }]);
    setIdCount((oldCount) => oldCount + 1);
  };
  const handelDeleteTodo = (idDeleted) => {
    const newArray = todo.filter(({ id }) => id !== idDeleted);
    setTodo(newArray);
  };

  return (
    <div>
      <Input
        handelChange={({ target: { value } }) => setInputValue(value)}
        inputName="todoInput"
        placeholder="inter a todo"
      />
      <Button handelClick={addTodo}>ADD TODO</Button>
      <div>
        {todo.map(({ id, description }) => (
          <div key={id.toString()}>
            <p>
              {id},{description}
            </p>
            <Button
              handelClick={() => handelDeleteTodo(id)}
              btnName="deleteTodo"
            >
              DELETE THIS TODO
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
