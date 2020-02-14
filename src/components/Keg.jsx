import React from 'react';
import './Keg.css';
import PropTypes from 'prop-types';

function Keg(props) {
  const amount = props.size;
  const price = props.price;
  return (
    <div className="kegDiv">
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
