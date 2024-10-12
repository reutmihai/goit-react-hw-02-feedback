import React, { Component } from 'react'

export default class FeedbackApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0.
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    return (
       <div>
        <h1>Feedback</h1>
        <button onClick={() => this.handleFeedback('good')}>Good</button>
        <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => this.handleFeedback('bad')}>Bad</button>

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        </div>
    )
  }
}
