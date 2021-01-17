import React from "react";

import Counter from "./components/Counter";
import Colors from "./components/Colors";
import Todo from "./components/Todo";
import SignUp from "./components/SignUpForm";
import CountEffect from "./components/CountEffect";
import ColorEffect from "./components/ColorEffect";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <h1>colors button</h1>
      <Colors />
      <hr />
      <h1>todo app </h1>
      <p>you can add and delete todo</p>
      <Todo />
      <hr />
      <h1>sign up</h1>
      <SignUp />
      <h1>make effect</h1>
      <CountEffect />
      <h1>background color with mousemove</h1>
      <ColorEffect />
    </div>
  );
}

export default App;
