import React from "react";

import Counter from "./components/Counter";
import Colors from "./components/Colors";
import Todo from "./components/Todo";
import SignUp from "./components/SignUpForm";

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
    </div>
  );
}

export default App;
