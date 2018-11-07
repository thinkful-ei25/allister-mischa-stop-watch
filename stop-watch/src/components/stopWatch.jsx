import React from 'react';
import StartButton from './start-button';
import PauseButton from './pause-button';
import ResetButton from './reset-button';
import Time from './time';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props)



    this.state = {
      clock: 0,
      pause: true
    }
    this.myInterval = null
  };



  setTime() {
    let time = this.state.clock;
    time++;
    this.setState({
      clock: time
    })
  }


  
  

  
  timeUpdater() {
    

    if (!this.state.pause) {
       this.myInterval = setInterval(() => {
        this.setTime()
      }, 1000)
    } else {
      console.log(this.myInterval)
      clearInterval(this.myInterval)
    }
  }

  setPause(boolean) {
    this.setState({
      pause: boolean
    })
  }
  render() {



    return (
      <div>
        <Time clock={this.state.clock} />
        <StartButton setPause={() => this.setPause(false)} startTimer={() => this.timeUpdater()} />
        <PauseButton setPause={() => this.setPause(true)} startTimer={() => this.timeUpdater()} />
        <ResetButton />
      </div>
    )
  }
}