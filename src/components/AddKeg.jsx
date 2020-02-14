import React from 'react';
import './AddKeg.css';

function AddKeg() {
  return (
    <div className="addKegDiv">
    <form>
    <input
    type='text'
    id='name'
    placeholder='Skywalker Cider...'/>
    <input
    type='text'
    id='content'
    placeholder='Alchohol Content'/>
    <div className='addRadio'>
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
    <button type='submit'>Add Keg</button>
    </form>
    </div>
  );
}

export default AddKeg;
