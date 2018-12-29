import React, { Component } from "react";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="my-3 text-center">React To Do</h1>
          <Todo />
        </div>
      </div>
    );
  }
}

export default App;
