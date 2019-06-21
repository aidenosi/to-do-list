import React, { Component } from "react";

class Task extends Component {
  state = {
    description: "Click to edit",
    isInEditMode: false
  };

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  updateDescription = () => {
    this.setState({
      isInEditMode: false,
      description: this.refs.textInput.value
    });
  };

  renderEditView = () => {
    return (
      <span className="col">
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.description}
              ref="textInput"
            />
          </div>
          <div className="col-1">
            <button
              className="btn-sm btn-warning"
              onClick={this.changeEditMode}
            >
              X
            </button>
          </div>
          <div className="col-1">
            <button
              className="btn-sm btn-primary"
              onClick={this.updateDescription}
            >
              OK
            </button>
          </div>
        </div>
      </span>
    );
  };

  renderDefaultView = () => {
    console.log("defualt");
    return (
      <div className="col bg-white" onClick={this.changeEditMode}>
        {this.state.description}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          {/* Render children of this object */}
          {this.props.children}
        </div>
        <div className="row justify-content-between mb-3">
          {this.state.isInEditMode
            ? this.renderEditView()
            : this.renderDefaultView()}
          <div className="col-1">
            <button
              onClick={() => this.props.onDelete(this.props.task.id)}
              className="btn btn-danger btn-m m-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
