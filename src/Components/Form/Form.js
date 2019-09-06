import React, { Component } from "react";
// import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      inputOne: "",
      inputTwo: "",
      inputThree: ""
    };
  }

  //input handler changes
  handleInputOneChange(val) {
    this.setState({ inputOne: val });
  }

  handleInputTwoChange(val) {
    this.setState({ inputTwo: val });
  }

  handleInputThreeChange(val) {
    this.setState({ inputThree: val });
  }

  //handler resets
  handlerReset = () => {   
      this.setState({
        ...this.state,
        inputOne: "",
        inputTwo: "",
        inputThree: ""
       });
  }

  render() {

    return (
      <div>
        
        {/* input 1 */}
        <div className="input1">
          <h4>Image URL:</h4>
          <input
            value={this.state.inputOne}
            placeholder="Image source here"
            onChange={ e => this.handleInputOneChange(e.target.value)}
          ></input>
        </div>

        {/* input 2 */}
        <div className="input2">
          <h4>Product Name:</h4>
          <input
          value={this.state.inputTwo}
          placeholder="Name your product"
          onChange={ e => this.handleInputTwoChange(e.target.value)}
          ></input>
        </div>

        {/* input 3 */}
        <div className="input3">
          <h4>Price:</h4>
          <input
          value={this.state.inputThree}
          placeholder="Price here"
          onChange={ e => this.handleInputThreeChange(e.target.value)}
          ></input>
        </div>

        <button
        onClick={this.handlerReset}
        type="button"
        >Cancel</button>
        <button
        type="submit"
        >Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
