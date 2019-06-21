import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div>
        <div className="row mb-1">
          {/* Render children of this object */}
          {this.props.children}
        </div>
        <div className="row mb-3">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              id="taskDesc"
              placeholder="Task description.."
            />
          </div>
          <div className="col-1">
            <button
              onClick={() => this.props.onEdit(this.props.task)}
              className="btn btn-warning btn-m m-1"
            >
              Edit
            </button>
          </div>
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
