import React from 'react';
import Body from './Body';
import AgeCheck from './AgeCheck';
import PropTypes from 'prop-types';
import { Switch, Route} from 'react-router-dom';

export default class SiteController extends React.Component {
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

  handleAgeCheck(){
    this.setState({kegsVisibleOnPage: true})
    console.log('kegsOnPage set to' + this.state.kegsVisibleOnPage);
  }

handleTappingNewKeg(newKeg) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {[newKeg.id]: newKeg});
    // newMasterKegList[newKeg.id] = newMasterKegList[newKeg.id];
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.kegsVisibleOnPage) {
      currentlyVisibleContent = (
        <Body onAgeConfirmation={this.props.onAgeConfirmation}/>
      )
    } else {
      currentlyVisibleContent = (
        <AgeCheck onAgeCheck={this.state.handleAgeCheck}/>
      )
    }

  return(
    <div>
    <Switch>
    <Route exact path='/' render={()=><SiteController onAgeConfirmation={this.handleAgeCheck}/>} />
    </Switch>
    {currentlyVisibleContent}
    </div>
  )
}
}

SiteController.propTypes = { onAgeCheck: PropTypes.func}
SiteController.propTypes = { onAgeConfirmation: PropTypes.func}
