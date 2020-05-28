import React, { Component } from "react";
import myLoader from "./image.svg";

import "./Loader.css";

export default class Loader extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.loaded(true)   
        }, 3000);
    }
    
    
  render() {
    console.log("this.props.isLoading ",this.props.isLoading);
    console.log("this.props.compo ",this.props.compo);


    return this.props.isLoading ? (
      <div className="centered">
        <img src={myLoader} alt="loader gif" />
      </div>
    ) 
    : this.props.compo;
  }
}
