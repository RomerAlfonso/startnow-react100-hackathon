import React, { Component } from 'react';

class App extends Component {
 constructor(props) {
   super(props)
   this.state={
      text: '',
      priority: '',
      todos: []
   }
   this.handleChange =this.handleChange.bind(this);
   this.selectOnChange = this.selectOnChange.bind(this);
   this.handleClick = this.handleClick.bind(this);
  }

  selectOnChange(event) {
    this.setState({priority: event.target.value});
  }
 
  handleChange(event){
    this.setState({text: event.target.value})
  }

  handleClick(event){
    let submit = (this.state.handleChange + this.state.selectOnChange)
    this.setState({todos:submit})
  }
 
 render() {
    return (
      <div className='container'>
        <h1 className="text-white font-weight-bold">Very Simple Todo App</h1>
        <p className="text-white font-weight-light">Track all the things</p>
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="card" className="card text-left">
              <h6 className="card-header pl-3 pt-3">Add New Todo</h6>
              <div className="card-block">
                <h6 className="font-weight-bold">I want to..</h6>
                <textarea onChange={this.handleChange} className="form-control create-todo-text" id="exampleFormControlTextarea1" rows="3"></textarea>

                <h6 className="font-weight-bold"> How much of a priority is this?</h6>
                <select className="form-control mb-5 create-todo-priority"  onChange={this.selectOnChange}>
                  <option selected>Select a Priority</option>
                  <option value="1" >Low</option>
                  <option value="2" >Mid</option>
                  <option value="3" >High</option>
                </select>

                <button

                  className="btn btn-success btn-block" value='submit'onChange={this.state.handleClick}>
                  Add
                </button>
              </div>
            </div>
          </div>


          <div className="col-8">
            <div className="card mb-5" >

              <div className="card-header" >
                View Todos
              </div>

              <div className="alert alert-info mb-0">
                <h5 className="card-title">Welcome to Very Simple Todo App!</h5>
                <p className="card-text  font-italic">Get started now by adding a new todo on the left.</p>
              </div>

              <div className="alert alert-warning mb-0 font-weight-bold" onChange={this.state.selectOnChange} value="2">               
              <div class="form-check">
              <label class="form-check-label card-title mx-4">
                <input className="form-check-input ml-1" type="checkbox" id="inlineCheckbox2" value="2" />
                Pick up milk from the market
                </label>
                <button className="pull-right mr-2 delete-todo">
                  Delete
                  <i className="fa fa-trash ml-1" aria-hidden="true"></i>
                </button>
                <button className="pull-right mr-3 edit-todo">
                  Edit
                  <i className="fa fa-pencil-square-o ml-1" aria-hidden="true"></i>
                </button>
              </div>
              </div>

              <div className="alert alert-danger mb-0 font-weight-bold" onChange={this.state.selectOnChange} value="3">
              <div class="form-check">
              <label class="form-check-label card-title mx-4">
                <input className="form-check-input ml-1" type="checkbox" id="inlineCheckbox2" value="3" />
                Write some code to learn Javascript
                </label>
                <button className="pull-right mr-2 delete-todo">
                  Delete
                  <i className="fa fa-trash ml-1" aria-hidden="true"></i>
                </button>
                <button className="pull-right mr-3 edit-todo">
                  Edit
                  <i className="fa fa-pencil-square-o ml-1" aria-hidden="true"></i>
                </button>
              </div>
              </div>

              <div className="alert alert-success mb-0 font-weight-bold" onChange={this.state.selectOnChange} value="1">
              <div class="form-check">
              <label class="form-check-label card-title mx-4">
                <input className="form-check-input ml-1" type="checkbox" id="inlineCheckbox2" value="1" />
                Go to the gym and exercise
                </label>
                <button className="pull-right mr-2 delete-todo">
                  Delete
                  <i className="fa fa-trash ml-1" aria-hidden="true"></i>
                </button>
                <button className="pull-right mr-3 edit-todo">
                  Edit
                  <i className="fa fa-pencil-square-o ml-1" aria-hidden="true"></i>
                </button>
                </div>
                </div>

                <div className="alert alert-success mb-0" >
                <h6 className="font-weight-bold">Description</h6>
                <textarea className="form-control update-todo-text" id="exampleFormControlTextarea1" rows="1"></textarea>
                <h6 className="font-weight-bold mt-3 update-todo-priority">Priority</h6>
                <select className="form-control">
                  <option selected>Select a Priority</option>
                  <option value="1">Low Priority</option>
                  <option value="2">Mid Priority</option>
                  <option value="3">High Priority</option>
                </select>


                <button type="button" className="btn btn-success pull-right mr-3 update-todo">Save</button>
               
                </div>
                
      

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;