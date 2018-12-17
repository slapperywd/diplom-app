import React, { Component } from 'react';
import './App.css';
import MainNavbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNavbar/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
