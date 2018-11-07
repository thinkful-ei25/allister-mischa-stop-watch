import React from 'react';

export default function Button(props) {
  return(
    
      <span>
        <button onClick={() => {
          return new Promise(function(resolve, reject) {
            props.setPause()
            resolve()
          })
          .then(() => props.startTimer());
        }}>
          {props.buttonName}
        </button>
      </span>
  )
}