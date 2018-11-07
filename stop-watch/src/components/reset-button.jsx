import React from 'react';

export default function ResetButton(props) {
  return(
      <span><button onClick={props.setReset}
      >Reset</button></span>
  )
}