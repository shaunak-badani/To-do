import React, { Component } from 'react';
import './App.css';
// import Person from './Components/To-do'
import Listings from './Components/To-do'

class App extends Component {
  state = {
    ToDo : [],
    AllDone : [],
    currentText : "",
    currentDescription : ""
  }
  
   addToDo = function(event){
     event.preventDefault();
    this.setState(prevState => ({
      ToDo : prevState.ToDo.concat({id : prevState.ToDo.length+1 , "name" : this.refs.title.value , "description" : this.refs.des.value})
    }));
    console.log(this.state.ToDo);
}
  tickTask = function(task){
      // console.log(task);
      // console.log(task.name);
      let AD = [...this.state.AllDone]; 
      let TD = [...this.state.ToDo];
      console.log(task);
      let f = TD.splice(task,1);
      AD = AD.concat(f);
      console.log(AD,TD);
      // TD = TD.filter(item=>item!==task);
      // console.log(TD);  
      // console.log(AD);
      // task.id = AD.length + 1;
      // AD = this.state.AllDone.concat(task);
      this.setState({
      AllDone :AD,
      ToDo : TD
    });
  }
  notDoneTask = function(task){
    console.log("This also works!");
  }
   unTickTask = (task) => {
    let AD = [...this.state.AllDone];
    let TD = [...this.state.ToDo];
    let f = AD.splice(task,1)[0];
    TD = TD.concat(f);
    this.setState({
        AllDone : AD,
        ToDo : TD
    });
  }

  render() {
    return (
      <div className="App">
          <Listings utt={this.unTickTask} AllDone = {this.state.AllDone} ToDo = {this.state.ToDo} tickTask = {this.tickTask.bind(this)}/>
        <div className="inputt">
        <form>
          <label htmlFor="title">What is the title of the Task?</label>
          <input name="title" ref="title" type="text" placeholder="Title"/>
          <p> What is the description of the task? </p>
          <textarea rows="8" ref="des" cols="30" placeholder="Describe the details of the task you have to do"></textarea>
          <button className="btn-add" type="submit" onClick={this.addToDo.bind(this)}>Add Task!</button>
        </form>
        </div>
        
      </div>
    );
  }
}

export default App;
