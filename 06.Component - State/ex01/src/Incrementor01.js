import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.val,
      count2: 10, // 데이터가 여러개 있을때
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + this.props.step,
              // count2: this.state.count2 // 바뀔 data만 바꾸면 자동으로 render진행해준다.
            });
            // anti parttern
            // this.state.count += 1;
            // this.forceUpdate();
          }}
        >
          {'+'}
        </button>{' '}
        {this.state.count}{' '}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - this.props.step,
            });
          }}
        >
          {'-'}
        </button>
      </div>
    );
  }
}
