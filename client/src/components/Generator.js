import React, {Component} from 'react';
class Generator extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleShowEdit = this.handleShowEdit.bind(this);
  }
  handleDelete(e) {
    console.log(e);
    this.props.onDelete(e);
  }
  handleEdit(e) {
    e.preventDefault();
    console.log(e.target[0]);
    this.props.onEdit(e.target[0]);
  }
  handleShowEdit(e) {
    this.props.onShowEdit(e);
  }
  render() {
    return (
      <div>
        <p>{this.props.tasks.map((task, index) => {
          return (
            <li className='list-none' key={task.id}>
              {index + 1} {task.taskName}
              <button
                uuid={task.id}
                onClick={this.handleDelete.bind(this, task.id)}
                className='bg-red-500 hover:bg-red-700 text-white
                font-bold py-2 px-4 rounded'>X</button>
              <button
                uuid={task.id}
                onClick={this.handleShowEdit.bind(this, task.id)}
                className='bg-red-500 hover:bg-red-700 text-white
                font-bold py-2 px-4 rounded'>Edit</button>
              {task.edit === true &&
                <form onSubmit={this.handleEdit}>
                  <input id={task.id} type="text"
                    placeholder={task.taskName} />
                  <input
                    type='submit'
                    uuid={task.id}
                    className='bg-blue-500 hover:bg-blue-700 text-white
                          font-bold py-2 px-4 rounded' />
                </form>
              }
            </li>
          );
        })}
        </p>
      </div>
    );
  };
}

export default Generator;

