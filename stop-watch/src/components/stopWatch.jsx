import React from 'react';
import Button from './button';
// import PauseButton from './pause-button';
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

  resetTime(){
    this.setState({
      clock: 0
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
        <ResetButton setReset={() => this.resetTime()} />
      </div>
    )
  }
}