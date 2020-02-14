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
    id='size'
    placeholder='Pints in keg'/>
    <input
    type='radio'
    id='cornelius'
    name='size'
    value='cornelius'/>
    <label for='cornelius'>Cornelius Keg <span>40 pints</span></label>
    <input
    type='radio'
    id='sixth'
    name='size'
    value='sixth'/>
    <label for='sixth'>Sixth Barrel Keg <span>41 pints</span></label>
    <input
    type='radio'
    id='quarter'
    name='size'
    value='quarter'/>
    <label for='quarter'>Quarter Barrel Keg <span>62 pints</span></label>
    <button type='submit'>Add Keg</button>
    </form>
    </div>
  );
}

export default AddKeg;
