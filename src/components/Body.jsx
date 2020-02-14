import React from 'react';
import './Body.css';
import Keg from './Keg';

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

function Body() {
  return (
    <div className="bodyDiv">
    <hr/>
    {masterKegList.map((keg, index) =>
      <Keg name={keg.name}
      content={keg.content}
      size={keg.size}
      price={keg.price}
      key={index}/>
    )}

    </div>
  );
}

export default Body;
