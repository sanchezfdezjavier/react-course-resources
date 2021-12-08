import React from "react";

import "./App.css";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <div className="App">
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
