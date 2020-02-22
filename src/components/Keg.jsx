import React, { Component } from 'react';
import './Keg.css';
import PropTypes from 'prop-types';


class Keg extends Component {
  constructor(props){
    super(props);
    this.state = {
      isUpdating: false,
    }
    this.editKeg = this.editKeg.bind(this);
    this.updateKegDone = this.updateKegDone.bind(this);
    this.deleteKeg = this.deleteKeg.bind(this)
  }



  editKeg(){
    const {id} = this.props.selectedKeg
    this.setState((prevState, props) => ({
      isUpdating : !prevState.isUpdating
    }))
  }

  updateKegDone(){
    const {id} = this.props.selectedKeg
    this.setState((prevState, props) => ({
      isUpdating : !prevState.isUpdating
    }))
    this.props.updateKegDone(
      id,
      this.name.value,
      this.content.value,
      this.price.value,
      this.size.value
    )
  }

  deleteKeg(){
    const {id} = this.props.selectedKeg

  }

  translateSize(size){
    let total = null
    if (size === 'mini') {
      console.log(size);
      total = 10
    } else if (size === 'litre') {
      total = 105
    } else if (size === 'half') {
      total = 124
    } else if (size === 'slim') {
      total = 62
    } else if (size === 'quarter') {
      total = 62
    } else if (size === 'sixth') {
      total = 41
    } else if (size === 'cornelius') {
      total = 40
    } else {
      total = 0
    }
    return total
  }

  render(){
    let total = null;
    const {name, content, price, size, id} = this.props.onSelectedKegCorrection;

    let drinkName = {
      fontFamily: "'Sonsie One', cursive",
      fontSize:'1.5vw'
    }

    let contentSpan = {
      fontSize: '.8vw',
      margin: '.4vw',
      color: 'grey'
    }

  return (
    this.state.isUpdating === true ? (
      <p> updating </p>
    ) : (

    <div className="kegDiv">
    <hr/>
    <h4 style={drinkName}>{this.props.name}<span style={contentSpan}>-<em>{this.props.content}%</em></span></h4>
    <p>${this.props.price}<span className='priceSpan'>/pint</span></p>
    <span>{this.translateSize(this.props.size)} pints left</span>

    <button onClick={() => this.props.onPouringGlass(this.translateSize(this.props.size))}>pour glass</button>

    <button onClick={() => {this.props.onSelectedKegCorrection({name: this.props.name, content: this.props.content, price: this.props.price, size: this.props.size, id: this.props.id})}}>Edit</button>
    </div>

  )
)
}
}
Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  content: PropTypes.string,
  size: PropTypes.string,
  onSelectedKegCorrection: PropTypes.func,
  onPouringGlass: PropTypes.func
}

export default Keg;
