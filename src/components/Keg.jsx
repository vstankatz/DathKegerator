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
    <div className="kegDiv">
    <hr/>
    <h4 style={drinkName}>{props.name}<span style={contentSpan}>-<em>{props.content}%</em></span></h4>
    <p>${props.price}<span className='priceSpan'>/pint</span></p>
    <span>{props.size} pints left</span>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  content: PropTypes.number,
  size: PropTypes.number
}

export default Keg;
