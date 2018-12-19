import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
