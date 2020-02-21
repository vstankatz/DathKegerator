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

console.log(props);
  let total = null;
  function translateSize(size){
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

  return (
    <div onClick={() => {props.onSelectedKegCorrection({name: props.name, content: props.content, price: props.price, size: props.size, id: props.id})}} className="kegDiv">
    <hr/>
    <h4 style={drinkName}>{props.name}<span style={contentSpan}>-<em>{props.content}%</em></span></h4>
    <p>${props.price}<span className='priceSpan'>/pint</span></p>
    <span>{translateSize(props.size)} pints left</span>
    <button onClick={() => props.onPouringGlass(translateSize(props.size))}>pour glass</button>
    </div>
  );
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
