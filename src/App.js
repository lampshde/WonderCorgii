import React from 'react';
import './App.css';
import Nav from './Nav.js'
import AOS from 'aos';
import ScrollTrigger from 'react-scroll-trigger';
import 'aos/dist/aos.css';

const navItems = ['INTRO','SKILLS','BLOG','CONTACT']
class App extends React.Component {
  constructor(props){
    super(props);
    this.child = React.createRef();
  }
  componentDidMount(){
    AOS.init({
      duration: 1000,
      offset: 300
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
          <Nav ref={this.child} navItems={navItems}></Nav>
        </header>
        <section>
          <ScrollTrigger onEnter={()=>(this.child.current.selectNavItem(0,true))}>
          <div id="section0" className="section" data-aos='fade'>
            <h2>.INTRO()</h2>
            <p>Vivamus ac elementum ex. Nullam nec venenatis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus tempus, risus consequat finibus feugiat, ante dui sodales magna, et mollis diam ante sit amet ipsum. Suspendisse venenatis hendrerit nibh vitae posuere. </p>
          </div>
          </ScrollTrigger>
          <ScrollTrigger onEnter={()=>(this.child.current.selectNavItem(1,true))}>
            <div id="section1" className="section skills" data-aos='fade-right'>
              <h2>.SKILLS()</h2>
              <p>{"{"}</p>
                <div className="code-line">
                  <span className="code-line-var">Docker</span>
                  <span className="code-line-value">"Containerize everything"</span>
                </div>
                <div className="code-line">
                  <span className="code-line-var">Angular</span>
                  <span className="code-line-value">"On the daily"</span>
                </div>
                <div className="code-line">
                  <span className="code-line-var">Hello</span>
                  <span className="code-line-value">"World!"</span>
                </div>
              <p>{"}"}</p>
            </div>
          </ScrollTrigger>
          <ScrollTrigger onEnter={()=>(this.child.current.selectNavItem(2,true))}>   
            <div id="section2" className="section" data-aos='fade-right'>
              <h2>.BLOG()</h2>
              <p>Vivamus ac elementum ex. Nullam nec venenatis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus tempus, risus consequat finibus feugiat, ante dui sodales magna, et mollis diam ante sit amet ipsum. Suspendisse venenatis hendrerit nibh vitae posuere. </p>
            </div>
          </ScrollTrigger>
          <ScrollTrigger onEnter={()=>(this.child.current.selectNavItem(3, true))}>     
            <div id="section3" className="section" data-aos='fade-right'>
              <h2>.CONTACT()</h2>
              <p>Vivamus ac elementum ex. Nullam nec venenatis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus tempus, risus consequat finibus feugiat, ante dui sodales magna, et mollis diam ante sit amet ipsum. Suspendisse venenatis hendrerit nibh vitae posuere. </p>
            </div>
          </ScrollTrigger>
        </section>   
      </div>
    );
  }
  
}

export default App;
