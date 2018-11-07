import React from 'react';

export default function PauseButton(props) {
  return(
      <span><button onClick={() => {
        return new Promise(function(resolve, reject) {
          props.setPause()
          resolve()
        })
        .then(() => props.startTimer());
      }}>Pause</button></span>
  )
}