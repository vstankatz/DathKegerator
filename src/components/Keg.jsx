import React from 'react';
import './Keg.css';
import PropTypes from 'prop-types';


function Keg(props) {

  const amount = props.size;
  const price = props.price;
  if (price < 5) {
    function low() {
      var element = document.getElementById('kegDiv');
      console.log(element);
      element.classList.add("lowPrice");
    }
     low();
  }
    return (
    <div className="kegDiv" id='kegDiv'>
    <hr/>
    <h4>{props.name}</h4>
    <p>{props.price} <em>{props.content}</em></p>
    <span>{props.size}</span>
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
