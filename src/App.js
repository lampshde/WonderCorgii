import React from 'react';
import './App.scss';

import SplashPage from './components/splash-page/SplashPage'
import DarkModeToggle from './components/dark-mode-toggle/DarkModeToggle'

class App extends React.Component {

  render(){
    return (
      <div className="App">
            <div className="fixed-toggle-wrapper">
              <DarkModeToggle></DarkModeToggle>
            </div>
            <SplashPage></SplashPage>
      </div>
    );
  }
  
}

export default App;
