import React from 'react';
import './AddKeg.css';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function AddKeg(props) {
  let _name,
  _content,
  _price,
  _size = null;

  console.log(props);

  const handleTappingNewKeg = event => {
    event.preventDefault();
    props.onTappingNewKeg({
      name: _name.value,
      content: _content.value,
      price: _price.value,
      size: _size.value,
      id: v4()
    })
    _name.value = '';
    _content.value = '';
    _price.value = '';
    _size.value = '';
  }
  return (
    <div className="addKegDiv">
    <form onSubmit={handleTappingNewKeg} className='form'>
    <div className='formTitle'>
    <h2>Add a Keg</h2>
    </div>
    <div className='nameDiv'>
    <input
    type='text'
    id='name'
    ref={input => {
      _name = input;
    }}
    placeholder='Skywalker Cider...'/>
    </div>
    <div className='numberDiv'>
    <label>
    <span className='percentDiv'>
    <input
    type='number'
    id='content'
    ref={input => {
      _content = input;
    }}
    placeholder='3 - 14'
    step=".01"
    min='3'
    max='14'/>
    % </span>
    </label>
    </div>
    <div className='priceDiv'>
    <span className='addPrice'>$
    <input
    type='number'
    id='price'
    ref={input => {
      _price = input;
    }}
    placeholder='3.50'
    step='.01'
    min='.50'
    max='100'/>
    </span>
    </div>
    <div className='addRadio'
    ref={input => {
          _size = input;
        }}>
    <label className='cornelius'>
    <input
    type='radio'
    id='cornelius'
    name='size'
    className='size'
    value='cornelius'/>
    <span className='allSpan'><span className='bigSpan'>Cornelius Keg <span className='smallSpan'>40 pints</span></span></span></label>

    <label className='sixth'>
    <input
    type='radio'
    id='sixth'
    name='size'
    className='size'
    value='sixth'/>
    <span className='allSpan'><span className='bigSpan'>Sixth Barrel Keg <span className='smallSpan'>41 pints</span></span></span></label>

    <label className='quarter'>
    <input
    type='radio'
    id='quarter'
    name='size'
    className='size'
    value='quarter'/>
    <span className='allSpan'><span className='bigSpan'>Quarter Barrel Keg <span className='smallSpan'>62 pints</span></span></span></label>

    <label className='slim'>
    <input
    type='radio'
    id='slim'
    name='size'
    className='size'
    value='slim'/>
    <span className='allSpan'><span className='bigSpan'>Slim Quarter Barrel Keg <span className='smallSpan'>62 pints</span></span></span></label>

    <label className='half'>
    <input
    type='radio'
    id='half'
    name='size'
    className='size'
    value='half'/>
    <span className='allSpan'><span className='bigSpan'>Half Barrel Keg <span className='smallSpan'>124 pints</span></span></span></label>

    <label className='litre'>
    <input
    type='radio'
    id='litre'
    name='size'
    className='size'
    value='litre'/>
    <span className='allSpan'><span className='bigSpan'>50 Litre Keg <span className='smallSpan'>105 pints</span></span></span></label>

    <label className='mini'>
    <input
    type='radio'
    id='mini'
    name='size'
    className='size'
    value='mini'/>
    <span className='allSpan'><span className='bigSpan'>Mini Keg <span className='smallSpan'>10 pints</span></span></span></label>
    </div>
    <div className='buttonDiv'>
    <button type='submit'>Add Keg</button>
    </div>
    </form>
    </div>
  );
}

export default AddKeg;

AddKeg.propTypes = {
  onTappingNewKeg: PropTypes.func
};
