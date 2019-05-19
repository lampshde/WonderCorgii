import React from 'react';
import './App.css';
import Nav from './Nav.js'
import Background from './Background.js'
import AOS from 'aos';
import ScrollTrigger from 'react-scroll-trigger';
import 'aos/dist/aos.css';

const navItems = ['ABOUT','SKILLS','CONTACT']
class App extends React.Component {
  constructor(props){
    super(props);
    this.child = React.createRef();
  }
  componentDidMount(){
    AOS.init({
      duration: 1000,
      offset: 100
    })
  }

  render(){
    return (
      <div className="App">
        <Background></Background>
        <header>
          <div></div>
          <Nav ref={this.child} navItems={navItems}></Nav>
        </header>
        <div className="title">
          <div className="title-line">Hi,</div>
          <div className="title-line">I'm John,</div>
          <div className="title-line">web developer. <img src="/assets/corgi.gif"/></div>
          <div className="sub-title-line">Full Stack Developer / Javascript / Corgi Lover</div>
        </div>
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
        <section>
          <ScrollTrigger onEnter={()=>(this.child.current.selectNavItem(1,true))}>
          <div id="section1" className="section" data-aos='fade'>
            <div className="section-header">
              <div className="section-header-title">Technical Skills</div>
              <div className="section-header-line"></div>
              <div className="section-header-num">N°02</div>
            </div>
            <div className="skills-wrapper">
              <div className="skills-frontend">
                <img src="/assets/unicorn.png"></img>
                <div className="skills-header"><span>frontend</span></div>
                <ul className="skills-list">
                  <li>Angular</li>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div className="skills-backend">
                <img src="/assets/sharp-tongue.png"></img>
                <div className="skills-header"><span>backend</span></div>
                <ul className="skills-list">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>GraphQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="skills-devops">
                <img src="/assets/gift-box.png"></img>
                <div className="skills-header"><span>devops</span></div>
                <ul className="skills-list">
                  <li>Docker</li>
                  <li>Jenkins</li>
                  <li>Github</li>
                  <li>Trello</li>
                </ul>
              </div>
            </div>
          </div>
          </ScrollTrigger>
        </section>  
        <section>
          <ScrollTrigger onEnter={()=>(this.child.current.selectNavItem(2,true))}>
            <div id="section2" className="section" data-aos='fade'>
              <div className="section-header">
                <div className="section-header-title">Contact me</div>
                <div className="section-header-line"></div>
                <div className="section-header-num">N°02</div>
              </div>
              
              <p>Thanks for stopping by</p>
              <p>This where I will host my future projects,</p>
              
              <p><span>john.randall.dev@gmail.com</span></p>
              <a className="contact-link" href="mailto:john.randall.dev@gmail.com">Lets Talk</a>
              <p>Made with 💙 by John Randall</p>
            </div>
            </ScrollTrigger>
        </section>
      </div>
    );
  }
  
}

export default App;
