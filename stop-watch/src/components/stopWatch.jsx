import React from 'react';
import StartButton from './start-button';
import PauseButton from './pause-button';
import ResetButton from './reset-button';
import Time from './time';

export default class StopWatch extends React.Component{
  constructor(props){
    super(props)

    

    this.state = {
      clock : 0

    }

    

  };
  timeUpdater (){
    let time = this.state.clock;
    setInterval(() => 
  
    {
    time++;
   this.setState( {
      clock: time
    })
   }, 0)
  }
  render(){
    
    
      
    

    return (
      <div>
        <Time clock={this.state.clock}/>
        <StartButton startTimer={() => this.timeUpdater()}/>
        <PauseButton />
        <ResetButton />
      </div>
    )
    }  
}