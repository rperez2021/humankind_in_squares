import React, {Component} from 'react';
import './App.css';
import Grid from './components/Grid';
import Generator from './components/Generator';
import uniqid from 'uniqid';
import Buck from './components/Buck';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }
  addTask = (e) => {
    const input = document.getElementById('task');
    e.preventDefault();
    if (!(input.value === '')) {
      this.setState({
        tasks: this.state.tasks.concat({
          id: uniqid(),
          taskName: input.value,
          edit: false,
        }),
      });
      input.value = '';
    }
  };
  deleteItem = (e) => {
    console.log(e);
    this.setState({
      tasks: this.state.tasks.filter(function(task) {
        return task.id !== e;
      }),
    });
  };
  showEdit = (e) => {
    this.setState((state) => {
      const tasks = state.tasks.map((task) => {
        if (task.id === e) {
          task.edit = true;
          return task;
        }
        return task;
      });
      return {
        tasks,
      };
    });
  };
  editItem = (e) => {
    console.log(e);
    this.setState((state) => {
      const tasks = state.tasks.map((task) => {
        if (task.id === e.id) {
          task.taskName = e.value;
          task.edit = false;
          return task;
        }
        return task;
      });
      return {
        tasks,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Humankind In Squares
            <br></br>
            Feel free to Add!
          </p>
        </header>
        <form onSubmit={this.addTask}>
          <label htmlFor="fname">Add Your Task:</label><br />
          <input type="text" id="task" />
          <input type="submit"
            className='bg-blue-500 hover:bg-blue-700 text-white
            font-bold py-2 px-4 rounded' />
          <input type="reset" defaultValue="Reset"
            className='bg-red-500 hover:bg-red-700 text-white
            font-bold py-2 px-4 rounded' />
        </form>
        <Generator
          tasks={this.state.tasks}
          onDelete={this.deleteItem}
          onEdit={this.editItem}
          onShowEdit={this.showEdit}></Generator>
        <Buck></Buck>
        <Grid></Grid>
      </div>
    );
  }
}

export default App;
