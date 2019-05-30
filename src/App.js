import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import StyleGuide from './StyleGuide'
function App(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/styleguide' component={StyleGuide} />
        </Switch>
    );
}

export default App;