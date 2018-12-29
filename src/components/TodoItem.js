import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: null,
      text: "",
      errors: {},
      editTodo: false
    };
  }

  componentWillMount() {
    const { todoItem } = this.props;

    this.setState({
      _id: todoItem._id,
      text: todoItem.text
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const todo = {
      _id: this.state._id,
      text: this.state.text
    };

    if (this.state.text === null || this.state.text === "") {
      this.setState({ errors: { text: "Field cannot be blank!" } });
    } else {
      this.props.onSubmit(todo);
      this.setState({
        text: this.state.text,
        errors: {},
        editTodo: !this.state.editTodo
      });
    }
  }

  onDelete(id) {
    this.props.onDelete(id);
  }

  render() {
    const { todoItem } = this.props;
    const { editTodo } = this.state;
    let editText;

    if (editTodo) {
      editText = (
        <div className="col-md-10">
          <div className="form-group">
            <input
              type="text"
              name="text"
              className="form-control"
              value={this.state.text}
              onChange={this.onChange.bind(this)}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="todo-item">
        <div className="row">
          <div className="col-md-8 mx-auto card p-4">
            <div className="row">
              {editTodo ? (
                editText
              ) : (
                <div className="col-md-10">{todoItem.text}</div>
              )}
              <div className="col-md-2 my-auto">
                <button
                  className="float-right mx-2"
                  onClick={this.onDelete.bind(this, todoItem._id)}
                >
                  <i className="fas fa-trash-alt" />
                </button>
                {editTodo ? (
                  <button
                    className="float-right"
                    onClick={this.onSubmit.bind(this)}
                  >
                    <i className="fas fa-check" />
                  </button>
                ) : (
                  <button
                    className="float-right"
                    onClick={() => {
                      this.setState({ editTodo: !this.state.editTodo });
                    }}
                  >
                    <i className="fas fa-pencil-alt" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
