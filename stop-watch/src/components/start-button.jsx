import React from 'react';

export default function StartButton(props) {
  return(
    
      <span>
        <button onClick={props.startTimer}>
          Start
        </button>
      </span>
  )
}