import React, { Component } from "react";
import uuid from "uuid";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newTodo = {
      _id: uuid.v4(),
      text: this.state.text
    };

    if (this.state.text === null || this.state.text === "") {
      this.setState({ errors: { text: "Field cannot be blank!" } });
    } else {
      this.props.onSubmit(newTodo);
      this.setState({ text: "", errors: {} });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="todo-form mb-5">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  className="form-control form-control-lg"
                  placeholder="What do I have to do today..."
                  value={this.state.text}
                  onChange={this.onChange}
                />
                {this.state.errors.text ? (
                  <div>{this.state.errors.text}</div>
                ) : null}
              </div>
              <input type="submit" value="Add Item" className="btn btn-dark" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
