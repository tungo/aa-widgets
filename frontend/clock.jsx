import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = { time: new Date() };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className= 'clock'>
        <h1>Clock</h1>
        <div className='clock-div'>
          <h3>Time:</h3>
          <h3>{`${this.state.time.getHours()}:${this.state.time.getMinutes()}:${this.state.time.getSeconds()}`}</h3>
        </div>
        <br/>
        <div className='clock-div'>
          <h3>Date</h3>
          <h3>{`${this.state.time.getMonth() + 1}/${this.state.time.getDate()}/${this.state.time.getFullYear()}` }</h3>
        </div>
      </div>
    );
  }
}

export default Clock;
