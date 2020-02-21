import React from 'react';
import Body from './Body';
import AgeCheck from './AgeCheck';
import PropTypes from 'prop-types';

class SiteController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageCheckCompleted: false
      masterKegList: {},
      selectedKeg: null,
      pourPint: -1
    }
    this.handleAgeCheck = this.handleAgeCheck.bind(this);
    this.handleTappingNewKeg = this.handleTappingNewKeg.bind(this);
    this.handleSelectedKegCorrection = this.handleSelectedKegCorrection.bind(this);
    this.handlePouringGlass = this.handlePouringGlass.bind(this);
  }

  handleAgeCheck(){
    this.setState({ageCheckCompleted: true})
  }

  render(){
    let currentlyVisibleKegs = null;
    if (this.state.ageCheckCompleted) {
      currentlyVisibleKegs = (
        <Body />
      )
    } else {
      currentlyVisibleKegs = (
        <AgeCheck onAgeCheck = {this.handleAgeCheck}/>
      )
    }

  return(
    <div>
    </div>
  )
}
}
export default SiteController;

SiteController.propTypes = { onAgeCheck: PropTypes.func}
