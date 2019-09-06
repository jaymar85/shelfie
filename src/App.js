import React, { Component } from 'react';
// import logo from './logo.svg';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import './App.css';

class App extends Component {
  rendor() {
    return (
    <div className="App">
      <Dashboard />
      <Form />
      <Header  />
    </div>
    );
  }
}

export default App;
