import React, { Component } from "react";
import TaskList from "./components/task-list";
import "./App.css";

class App extends Component {
  state = {
    // array of counter objects
    tasks: []
  };

  constructor() {
    super();
    console.log("App constructor");
  }

  componentDidMount() {
    //Ajax call
    this.setState({});
  }

  handleEdit = task => {
    console.log("Reset id: ", task.id);
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...task };
    tasks[index].value = 0;
    this.setState({ tasks });
  };

  handleDeleteCounter = taskId => {
    console.log("Delete counter id:", taskId);
    const tasks = this.state.tasks.filter(c => c.id !== taskId);
    this.setState({ tasks });
  };

  handleAddTask = () => {
    let x = this.state.tasks.length;
    if (x !== 0) {
      x = this.state.tasks[x - 1].id;
    }
    console.log("Add counter id:", x + 1);
    const tasks = [...this.state.tasks, { id: x + 1, value: 0 }];
    this.setState({ tasks });
  };

  render() {
    return (
      <React.Fragment>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossOrigin="anonymous"
          />
        </head>
        <main className="container bg-light">
          <TaskList
            tasks={this.state.tasks}
            onEdit={this.handleEdit}
            onDelete={this.handleDeleteCounter}
            onAdd={this.handleAddTask}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
