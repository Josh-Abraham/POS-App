import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './App.css';

class BitCoinAdder extends Component {
  constructor(props) {
  super(props);
  this.state = {
    time: props.time
    }
  }
  componentDidMount() {
    const oldTime = this.clone(this.state.time);
    console.log('hit ')
    setTimeout(() => {
      this.setState({ time: oldTime });
    }, 450);
  }

  componentWillUpdate() {
    const oldTime = this.clone(this.state.time);
    setTimeout(() => {
      this.setState({ time: 457 + oldTime });
    }, 457);
  }

  clone(src) {
  return JSON.parse(JSON.stringify(src));
  }

  topPane() {
    let time = this.state.time/100000000000000;
    time = time.toFixed(14);

    return (
      <div className="toppane">
        <li>
          <p align="right" className="bitcoin">
            {time}
              <img
                alt=''
                src="https://cdn4.iconfinder.com/data/icons/proglyphs-shopping-and-finance/512/Coin_-_Bitcoin-512.png"
                width="30"
                height="30"
                className="bitcoin"/>
              </p>
          </li>
      </div>
    );
  }

  render() {
    const topPane = this.topPane();

    return(
      <div>
        {topPane}
      </div>
    )
  }
}
BitCoinAdder.proptypes = {
  time: Proptypes.number.isRequired
};
export default BitCoinAdder;
