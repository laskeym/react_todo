import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    // Check to see if there is a todo list in local storage
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos === null) {
      this.setState({ loading: true });
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      this.setState({
        loading: false,
        todos
      });
    }
  }

  handleSubmit(todoItem) {
    const todos = [...this.state.todos];
    let isEdit;

    // Check if submitted todo Item is an edit, if so check isEdit flag
    isEdit = false;

    todos.forEach(todo => {
      if (todo._id === todoItem._id) {
        todo.text = todoItem.text;
        isEdit = true;
      }
    });

    // If iedEdit flag is true, update the todos array state, else add new item
    if (isEdit === false) {
      todos.push(todoItem);
    }

    // Set state and storage
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  handleDelete(id) {
    const todos = this.state.todos.filter(todo => todo._id !== id);

    // Set state and storage
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  render() {
    const { todos } = this.state;
    let todoItems;

    todoItems = todos.map((todo, index) => (
      <TodoItem
        key={todo._id}
        todoItem={todo}
        onSubmit={this.handleSubmit}
        onDelete={this.handleDelete}
      />
    ));

    return (
      <div className="to-do">
        <TodoForm onSubmit={this.handleSubmit} />
        {todoItems}
      </div>
    );
  }
}

export default Todo;
