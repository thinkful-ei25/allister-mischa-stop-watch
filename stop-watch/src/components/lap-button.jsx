import React from 'react';


export default class LapButton extends React.Component {
  render(){
    if(!this.props.pauseState){
      return(
        <span>
          <button onClick={() => {this.props.lap.push(this.props.lapTime);}}>
          Lap
          </button>
        </span> 
    )
    }else{ 
      return (
        <span>
          <button>Lap</button>
        </span>
      )
    }
  }
}
