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
    Cornelius Keg <span>40 pints</span></label>

    <label className='sixth'>
    <input
    type='radio'
    id='sixth'
    name='size'
    className='size'
    value='sixth'/>
    Sixth Barrel Keg <span>41 pints</span></label>

    <label className='quarter'>
    <input
    type='radio'
    id='quarter'
    name='size'
    className='size'
    value='quarter'/>
    Quarter Barrel Keg <span>62 pints</span></label>

    <label className='slim'>
    <input
    type='radio'
    id='slim'
    name='size'
    className='size'
    value='slim'/>
    Slim Quarter Barrel Keg <span>62 pints</span></label>

    <label className='half'>
    <input
    type='radio'
    id='half'
    name='size'
    className='size'
    value='half'/>
    Half Barrel Keg <span>124 pints</span></label>

    <label className='litre'>
    <input
    type='radio'
    id='litre'
    name='size'
    className='size'
    value='litre'/>
    50 Litre Keg <span>105 pints</span></label>

    <label className='mini'>
    <input
    type='radio'
    id='mini'
    name='size'
    className='size'
    value='mini'/>
    Mini Keg <span>10 pints</span></label>
    </div>
    <button type='submit'>Add Keg</button>
    </form>
    </div>
  );
}

export default AddKeg;
