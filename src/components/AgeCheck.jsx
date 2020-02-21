import React from 'react';
import PropTypes from 'prop-types';

export default function AgeCheck(props){
  return(
    <div>
    <p>Are you over 21?</p>
    <button onClick={props.onAgeCheck}>Yes</button>
    </div>
  )
}

AgeCheck.propTypes = { onAgeCheck: PropTypes.func}
