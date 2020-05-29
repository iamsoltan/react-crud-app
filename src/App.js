import React, { Component } from 'react';
import './App.css';
import Loader from "./Loader";
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isLoading: true,
    }
  };

  /* loader M */
  loaded = (x) => {
    if (x === true && this.state.isLoading === true) {
      this.setState({ isLoading: false });
      console.log("LOADED !!!");
    }
  }

  /* axios */
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => { this.setState({ todoList: res.data }) })
  }

  /*crud */
  update=(e)=>{
    e.target.parentNode.nodeName = "input"
  }


  render() {

    return (
      <div>
        
      <div className="app">
      <div className='item'><input id="add-input"></input><button onClick={e=>{
      let y=[{id:this.state.todoList.length+1,title:e.target.parentNode.firstChild.value},...this.state.todoList];console.log(y);this.setState({todoList : y})}}>add</button></div>
        {this.state.todoList.map(x => <div key={x.id} className="item"><button>{x.id}</button>{x.title}<div><button onClick={e=>this.update(e)}>update</button><button>delete</button></div></div>)}
      </div>
      </div>
    );
  }
}

export default App;


