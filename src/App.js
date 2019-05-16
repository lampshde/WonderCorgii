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
          {/* <div>
            <div className="title animated fadeInDown" >JOHNRANDALL</div>
            <div className="sub-title animated fadeInDown">Fullstack Web Developer</div>
          </div> */}
          <div className="title">
            <div className="title-line">Hi,</div>
            <div className="title-line">I'm John,</div>
            <div className="title-line">web developer. <img src="/assets/corgi.gif"/></div>
            <div className="sub-title-line">Full Stack Developer / Javascript / Corgi Lover</div>
          </div>
          <Nav ref={this.child} navItems={navItems}></Nav>
        </header>
        <section>
          <ScrollTrigger onEnter={()=>(this.child.current.selectNavItem(0,true))}>
          <div id="section0" className="section" data-aos='fade'>
            <div className="section-header">
              <div className="section-header-title">About me</div>
              <div className="section-header-line"></div>
              <div className="section-header-num">N°01</div>
            </div>
            <p>At my <span>:root</span>, I am a creative frontend developer, designer, and ultimately a lifelong learner.</p>
            <p>My passion is constructing engaging and well designed websites through <span>carefully crafted code.</span></p>
          </div>
          </ScrollTrigger>
        </section>   
      </div>
    );
  }
  
}

export default App;
