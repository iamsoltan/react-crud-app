import React, { Component } from 'react';
import './App.css';
import Editor from "./Editor";
import Loader from "./Loader";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
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
    Axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res=>{ this.setState({todoList : res.data}) })
  }
  

  render() {

    return (
      <Router>

        <div className="App">
          <Switch>
            {/*<Route path="/" exact component={() => <MovieList user={this.state.user} addFav={this.addFav} array={this.filtered(this.state.movieList, this.state.keyword, this.state.rate)} />} />
                        */}
           {/* <Route path="/" exact component={() => <Loader loaded={this.loaded} isLoading={this.state.isLoading} compo={<MovieList loaded={this.loaded} user={this.state.user} addFav={this.addFav} array={this.filtered(this.state.movieList, this.state.keyword, this.state.rate)} />} />} />*/}
            <Route path="/" exact component={() =>this.state.todoList.map(x=><div>{x.title}</div>) } />
            <Route path="/add" component={() => <Editor addMovie={this.addMovie} mode="add" />} />
            <Route path="/edit/:iDelete" component={() => <Editor e={this.state.movieList} updateMovie={this.updateMovie} deleteMovie={this.deleteMovie} mode="edit" />} />
          </Switch>

        </div>

      </Router>
    );
  }
}

export default App;


