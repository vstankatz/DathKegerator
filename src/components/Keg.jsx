import React from 'react';
import './Keg.css';
import PropTypes from 'prop-types';


function Keg(props) {
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
    <div onClick={() => {props.onSelectedKegCorrection({name: props.name, content: props.content, price: props.price, size: props.size, id: props.id})}} className="kegDiv">
    <hr/>
    <h4 style={drinkName}>{props.name}<span style={contentSpan}>-<em>{props.content}%</em></span></h4>
    <p>${props.price}<span className='priceSpan'>/pint</span></p>
    <span>{props.size} pints left</span>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  content: PropTypes.string,
  size: PropTypes.string,
  onSelectedKegCorrection: PropTypes.func
}

export default Keg;
