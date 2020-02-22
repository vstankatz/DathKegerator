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
      pintTotal: null
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

  handleSelectedKegCorrection(kegSelected){
    let kegCopyList = this.state.masterKegList.map((keg) => {
      if (keg.id === kegSelected.id) {
        keg.name = kegSelected.name;
        keg.content = kegSelected.content;
        keg.price = kegSelected.price;
        keg.size = kegSelected.size;
      }
      return keg;
    })
    this.setState((prevState, props) => ({
      kegList: kegCopyList
    }));
    console.log(this.state.selectedKeg);
  }

  handlePouringGlass(size){
    this.setState({pintTotal: size})
  }

  handleAgeCheck(){

  }

  render(){
  return (
    <div className="App">
    <Header/>
    <Switch>
    <Route exact path='/' render={(props) => <Body kegList={this.state.masterKegList} pintTotal={this.state.pintTotal} onPouringGlass={this.handlePouringGlass} onSelectedKegCorrection={this.handleSelectedKegCorrection} selectedKeg={this.state.selectedKeg}/>} />
    <Route exact path='/home' render={(props) => <Body kegList={this.state.masterKegList} pintTotal={this.state.pintTotal} onPouringGlass={this.handlePouringGlass} onSelectedKegCorrection={this.handleSelectedKegCorrection} selectedKeg={this.state.selectedKeg}/>} />
    <Route exact path='/addkeg' render={() => (<AddKeg onTappingNewKeg={this.handleTappingNewKeg}/>)} />
    <Route exact path='/editkeg/{:id}' component={EditKeg} />
    </Switch>
    </div>
  );
}
}
