import React from 'react';

export default function Time(props) {
  const seconds = 100;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const hundrethsDisplay = props.clock%100
  const secondsDisplay = (Math.floor(props.clock/(seconds))%60);
  const minutesDisplay = (Math.floor(props.clock/minutes)%60);
  const hoursDisplay = (Math.floor(props.clock/hours)%60);
  return(
    <div>
      <span>{hoursDisplay} : {minutesDisplay} : {secondsDisplay} : {hundrethsDisplay}</span>
    </div>
  )
}