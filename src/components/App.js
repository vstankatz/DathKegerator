import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import SiteController from './AgeCheck';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={SiteController} />
    <Route exact path='/addkeg' component={AddKeg} />
    <Route exact path='/editkeg' component={EditKeg} />
    </Switch>

    </div>
  );
}

export default App;
