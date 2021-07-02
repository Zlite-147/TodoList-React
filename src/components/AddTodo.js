import React from "react";

class AddTodo extends React.Component {
  state = {
    name: "",
    desc: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.desc === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addTodosHandler(this.state);
    this.setState({ name: "", desc: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Make Todo</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="Desc"
              placeholder="Desc"
              value={this.state.desc}
              onChange={(e) => this.setState({  desc: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
