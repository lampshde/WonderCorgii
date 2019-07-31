import React from 'react';
import './App.css';
import Nav from './Nav.js'
import AOS from 'aos';
import ScrollTrigger from 'react-scroll-trigger';
import 'aos/dist/aos.css';

const navItems = ['ABOUT','SKILLS','CONTACT']
const skills = [
  {
    header:"frontend",
    image: "/assets/unicorn.png",
    imageAlt: "frontend-unicorn",
    skillList: ["Angular", "React", "JavaScript", "Figma"]
  },
  {
    header:"backend",
    image: "/assets/sharp-tongue.png",
    imageAlt: "backend-monster",
    skillList: ["Node.js", "Express", "GraphQL", "MongoDB"]
  },
  {
    header:"devops",
    image: "/assets/gift-box.png",
    imageAlt: "devops-present",
    skillList: ["Docker", "Jenkins", "Git", "Trello"]
  }
]



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
        <header>
          <div></div>
          <Nav ref={this.child} navItems={navItems}></Nav>
        </header>
        <div className="title">
        <svg width="177" height="142" viewBox="0 0 177 142" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path shape-rendering="geometricPrecision" fill-rule="evenodd" clip-rule="evenodd" d="M101.842 37.041L131.578 134L160.773 38.808L141.265 65.3431L101.842 37.041ZM101.698 36.572L130.858 19.9433L90.4815 0L101.698 36.572ZM132.016 20.0826L161.537 36.3157L172.675 7.90244e-06L132.016 20.0826Z" fill="white"/>
            <path shape-rendering="geometricPrecision" d="M101.414 45.8645L128.371 132.605L91.4513 107.953H54.921L27.8 132.605L4 98.8219V73.865L101.414 45.8645Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="176.675" height="142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>
          <div className="title-line">Hi,</div>
          <div className="title-line">I'm John,</div>
          <div className="title-line">web developer.</div>
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
              
              {skills.map( (skill, index) => (
                <div key={index}>
                  <img alt={skill.imageAlt} src={skill.image}></img>
                  <div className="skills-header"><span>{skill.header}</span></div>
                  <ul className="skills-list">
                    
                    {skill.skillList.map( (item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                  </ul>
                </div>
              ))}

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
                <div className="section-header-num">N°03</div>
              </div>
              
              <p>Thanks for stopping by my young website</p>
              <p>This is where I will host my future projects,</p>
              
              <p><span>john.randall.dev@gmail.com</span></p>
              <a className="contact-link" href="mailto:john.randall.dev@gmail.com">Lets Talk</a>
              <p>Made with <span role="img"aria-label="blue-heart">💙</span> by John Randall</p>
            </div>
            </ScrollTrigger>
        </section>
      </div>
    );
  }
  
}

export default App;
