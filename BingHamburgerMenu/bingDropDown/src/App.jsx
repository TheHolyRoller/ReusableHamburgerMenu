import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './App.css';


function App() {

  return (
    <div className="App" id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <img src="logo.png" alt="Logo" className="menu-logo"/>
        <a className="menu-item" href="/">
          <i className="fas fa-home"></i>
          Home
        </a>
        <a className="menu-item" href="/about">
          <i className="fas fa-info-circle"></i>
          About
        </a>
        <a className="menu-item" href="/contact">
          <i className="fas fa-envelope"></i>
          Contact
        </a>
        <button className="menu-button">Sign Up</button>
      </Menu>
      
      
      
      
      {/* This is the rest of the page  */}
      <div id="page-wrap">
        <h1>Cool Website</h1>
        <h2>Click on the hamburger icon to see the menu</h2>
      </div>
    </div>
  );
}

export default App;