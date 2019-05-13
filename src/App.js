import React from 'react';
import './App.css';
import Nav from './Nav.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

const navItems = ['INTRO','SKILLS','BLOG','CONTACT']
class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration: 1000
    })
  }

  render(){
    return (
      <div className="App">
        <header>
          <div>
            <div className="title animated fadeInDown" >JOHNRANDALL</div>
            <div className="sub-title animated fadeInDown">Fullstack Web Developer</div>
          </div>
          <Nav navItems={navItems}></Nav>
        </header>
        <section>
          <div className="card" data-aos='fade'>
            <h2>INTRO</h2>
            <p>Vivamus ac elementum ex. Nullam nec venenatis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus tempus, risus consequat finibus feugiat, ante dui sodales magna, et mollis diam ante sit amet ipsum. Suspendisse venenatis hendrerit nibh vitae posuere. </p>
          </div>
          <div className="card" data-aos='fade-right'>
            <h2>SKILLS</h2>
            <p>Vivamus ac elementum ex. Nullam nec venenatis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus tempus, risus consequat finibus feugiat, ante dui sodales magna, et mollis diam ante sit amet ipsum. Suspendisse venenatis hendrerit nibh vitae posuere. </p>
          </div>
          <div className="card" data-aos='fade-right'>
            <h2>BLOG</h2>
            <p>Vivamus ac elementum ex. Nullam nec venenatis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus tempus, risus consequat finibus feugiat, ante dui sodales magna, et mollis diam ante sit amet ipsum. Suspendisse venenatis hendrerit nibh vitae posuere. </p>
          </div>
          <div className="card" data-aos='fade-right'>
            <h2>CONTACT</h2>
            <p>Vivamus ac elementum ex. Nullam nec venenatis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus tempus, risus consequat finibus feugiat, ante dui sodales magna, et mollis diam ante sit amet ipsum. Suspendisse venenatis hendrerit nibh vitae posuere. </p>
          </div>
        </section>   
      </div>
    );
  }
  
}

export default App;
