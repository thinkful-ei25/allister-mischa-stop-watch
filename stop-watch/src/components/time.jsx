import React from 'react';

export default function Time(props) {
  const hundreths = props.clock%100
  const seconds = (Math.floor(props.clock/(100))%60);
  const minutes = (Math.floor(props.clock/60**3)%60);
  const hours = (Math.floor(props.clock/(60**4)%60));
  return(
    <div>
      <span>{hours} {minutes} {seconds} {hundreths}</span>
    </div>
  )
}