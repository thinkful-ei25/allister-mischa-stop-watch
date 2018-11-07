import React from 'react';

export default function StartButton(props) {
  return(
    
      <span>
        <button onClick={() => {
          return new Promise(function(resolve, reject) {
            props.setPause()
            resolve()
          })
          .then(() => props.startTimer());
        }}>
          Start
        </button>
      </span>
  )
}