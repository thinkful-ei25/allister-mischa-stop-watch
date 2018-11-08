import React from 'react';
import './lap-list.css';
export default function LapList(props) {
    const laps = props.lapsList.map((time, idx) => {
      const seconds = 100;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const hundrethsDisplay = time%100
      const secondsDisplay = (Math.floor(time/(seconds))%60);
      const minutesDisplay = (Math.floor(time/minutes)%60);
      const hoursDisplay = (Math.floor(time/hours)%100);
      const timeToDisplay = `${hoursDisplay.toString().padStart(2, "0")} : ${minutesDisplay.toString().padStart(2, "0")} : ${secondsDisplay.toString().padStart(2, "0")} : ${hundrethsDisplay.toString().padStart(2, "0")}`;
      return(
        <li key={idx}>
          Lap {idx+1} ===> {timeToDisplay}
        </li>
      )
     
      });
      console.log(laps);
    return (
      <ul >
          {laps}
      </ul>
  );    
}
