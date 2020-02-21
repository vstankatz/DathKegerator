import React from 'react';
import './EditKeg.css';
import PropTypes from 'prop-types';

function EditKeg(props) {
  console.log(props.selectedKeg);
  let _name = props.selectedKeg.name;
  let _content = props.selectedKeg.content;
  let _price = props.selectedKeg.price;
  let _size = props.selectedKeg.size;
  let handleUpdatingKeg = null;
  return (
    <div className="editKegDiv">
    <form onSubmit={handleUpdatingKeg} className='form'>
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
    value={props.selectedKeg.name}/>
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
    value={props.selectedKeg.content}
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
    value={props.selectedKeg.price}
    step='.01'
    min='.50'
    max='100'/>
    </span>
    </div>
    <div className='addRadio'>
    <label className='cornelius'>
    <input
    type='radio'
    id='cornelius'
    ref={input => {
      _size = input;
    }}
    name='size'
    className='size'
    value='cornelius'/>
    <span className='allSpan'><span className='bigSpan'>Cornelius Keg <span className='smallSpan'>40 pints</span></span></span></label>

    <label className='sixth'>
    <input
    type='radio'
    id='sixth'
    ref={input => {
      _size = input;
    }}
    name='size'
    className='size'
    value='sixth'/>
    <span className='allSpan'><span className='bigSpan'>Sixth Barrel Keg <span className='smallSpan'>41 pints</span></span></span></label>

    <label className='quarter'>
    <input
    type='radio'
    id='quarter'
    ref={input => {
      _size = input;
    }}
    name='size'
    className='size'
    value='quarter'/>
    <span className='allSpan'><span className='bigSpan'>Quarter Barrel Keg <span className='smallSpan'>62 pints</span></span></span></label>

    <label className='slim'>
    <input
    type='radio'
    id='slim'
    ref={input => {
      _size = input;
    }}
    name='size'
    className='size'
    value='slim'/>
    <span className='allSpan'><span className='bigSpan'>Slim Quarter Barrel Keg <span className='smallSpan'>62 pints</span></span></span></label>

    <label className='half'>
    <input
    type='radio'
    id='half'
    ref={input => {
      _size = input;
    }}
    name='size'
    className='size'
    value='half'/>
    <span className='allSpan'><span className='bigSpan'>Half Barrel Keg <span className='smallSpan'>124 pints</span></span></span></label>

    <label className='litre'>
    <input
    type='radio'
    id='litre'
    ref={input => {
      _size = input;
    }}
    name='size'
    className='size'
    value='litre'/>
    <span className='allSpan'><span className='bigSpan'>50 Litre Keg <span className='smallSpan'>105 pints</span></span></span></label>

    <label className='mini'>
    <input
    type='radio'
    id='mini'
    ref={input => {
      _size = input;
    }}
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

export default EditKeg;

EditKeg.propTypes = {
  selectedKeg: PropTypes.object
}
