import React from 'react';
import './App.css';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import SiteController from './AgeCheck';
import Body from './Body';
import Header from './Header';
import { Switch, Route} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegsVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      pourPint: -1
    }
    this.handleTappingNewKeg = this.handleTappingNewKeg.bind(this);
    this.handleSelectedKegCorrection = this.handleSelectedKegCorrection.bind(this);
    this.handlePouringGlass = this.handlePouringGlass.bind(this);
    this.handleAgeCheck = this.handleAgeCheck.bind(this);
  }

  handleTappingNewKeg(newKeg) {
    this.setState({
      masterKegList: [...this.state.masterKegList, newKeg]
    });
  }

  handleSelectedKegCorrection(keg){
    this.setState({selectedKeg: keg});
    console.log(this.state.selectedKeg);
  }

  handlePouringGlass(){

  }

  handleAgeCheck(){

  }

  render(){
  return (
    <div className="App">
    <Header/>
    <Switch>
    <Route exact path='/' component={Body} />
    <Route exact path='/home' render={(props) => <Body kegList={this.state.masterKegList} onSelectedKegCorrection={this.handleSelectedKegCorrection} selectedKeg={this.state.selectedKeg}/>} />
    <Route exact path='/addkeg' render={() => (<AddKeg onTappingNewKeg={this.handleTappingNewKeg}/>)} />
    <Route exact path='/editkeg/{:id}' component={EditKeg} />
    </Switch>
    </div>
  );
}
}
