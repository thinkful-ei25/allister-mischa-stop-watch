import React from 'react';
import Button from './button';
// import PauseButton from './pause-button';
import ResetButton from './reset-button';
import Time from './time';
import LapButton from './lap-button';
import LapList from './lap-list'

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: 0,
      pause: true,
      // timeDisplay: '00 : 00 : 00',
      laps: []
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

  resetTime(){
    this.setState({
      clock: 0,
      laps: []
    })
  }
  timeUpdater() {
    

    if (!this.state.pause) {
       this.myInterval = setInterval(() => {
        this.setTime()
      }, 10)
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
        <Button buttonName={'Start'} setPause={() => this.setPause(false)} startTimer={() => this.timeUpdater()} />
        <Button buttonName={'Pause'} setPause={() => this.setPause(true)} startTimer={() => this.timeUpdater()} />
        <ResetButton setReset={() => this.resetTime()}/>
        <LapButton lapTime={this.state.clock} lap={this.state.laps} pauseState={this.state.pause}/>
        <LapList lapsList={this.state.laps}/>
      </div>
    )
  }
}