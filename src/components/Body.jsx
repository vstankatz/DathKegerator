import React from 'react';
import './Body.css';
import Keg from './Keg';
import PropTypes from 'prop-types';

var masterKegList = [
  {
    name: 'Obi Wan Porter',
    content: 4.5,
    size: 124,
    price: 4
  },
  {
    name: 'Princess Lei Ale',
    content: 5,
    size: 64,
    price: 5
  },
  {
    name: 'Parsec Pilsner',
    content: 6.5,
    size: 101,
    price: 6.50
  }
];

export default function Body(props) {




  return (
    <div className="bodyDiv">

    <hr/>
    {props.kegList.map((keg, index) =>
      <Keg name={keg.name}
      content={keg.content}
      size={keg.size}
      price={keg.price}
      id={keg.id}
      key={index}/>
    )}

    </div>
  );
}

Body.propTypes = {
  kegList: PropTypes.array
};
