import React, { Component } from "react";
import Task from "./task";

class TaskList extends Component {
  render() {
    const { onAdd, tasks, onDelete, onEdit } = this.props;

    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-2">
            <button onClick={onAdd} className="btn btn-primary btn-lg m-2">
              New Task
            </button>
          </div>
        </div>
        {/* Map each counter object to a Counter with key and value attributes*/}
        {tasks.map(task => (
          <Task key={task.id} onDelete={onDelete} onEdit={onEdit} task={task}>
            {/*The <h4> is a Child of the Counter*/}
            <h4>Task #{task.id}</h4>
          </Task>
        ))}
      </div>
    );
  }
}

export default TaskList;
