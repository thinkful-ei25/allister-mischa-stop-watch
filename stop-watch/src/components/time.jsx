import React from 'react';

export default function Time(props) {
  const seconds = 100;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const hundrethsDisplay = props.clock%100
  const secondsDisplay = (Math.floor(props.clock/(seconds))%60);
  const minutesDisplay = (Math.floor(props.clock/minutes)%60);
  const hoursDisplay = (Math.floor(props.clock/hours)%100);
  const timeToDisplay = `${hoursDisplay.toString().padStart(2, "0")} : ${minutesDisplay.toString().padStart(2, "0")} : ${secondsDisplay.toString().padStart(2, "0")} : ${hundrethsDisplay.toString().padStart(2, "0")}`;
  // props.timeDisplay = timeToDisplay;
  return(
    <div>
      <span>{timeToDisplay}</span>
    </div>
  )
}