import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tasksform from './components/Tasksform';

import { todos } from './tasks.json';
console.log(todos);

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
    this.handleAddTasks = this.handleAddTasks.bind(this);
  }
  handleAddTasks(todo) {
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }
  handleRemoveTasks(index) {
    this.setState({
      todos: this.state.todos.filter((e, i)=>{
        return i !== index
      })
    })
  }
  render() {
    console.log(this.state.todos)
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              {todo.description}
              <p><mark>{todo.responsable}</mark></p>
            </div>
            <div className="card-footer">
            <button
                className="btn btn-danger"
                onClick={this.handleRemoveTasks.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="text-white">
            <img src={logo} className="App-logo" alt="logo" />
            Aplicacion de tareas
           <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <Tasksform onAddTasks={this.handleAddTasks}></Tasksform>
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
