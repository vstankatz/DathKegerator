import React from 'react';
import './App.css';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import SiteController from './AgeCheck';
import Body from './Body';
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={SiteController} />
    <Route exact path='/home' component={Body} />
    <Route exact path='/addkeg' component={AddKeg} />
    <Route exact path='/editkeg' component={EditKeg} />
    </Switch>
    </div>
  );
}

export default App;
