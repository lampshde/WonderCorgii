import React from 'react';
import './App.css';
import Nav from './Nav.js'

const navItems = ['INTRO','SKILLS','BLOG','CONTACT']
function App() {
  return (
    <div className="App">
      <Nav navItems={navItems}></Nav>
      <div className="title animated fadeInDown" >JOHNRANDALL</div>
      <div className="sub-title animated fadeInDown">Fullstack Web Developer</div>
    </div>
  );
}

export default App;
