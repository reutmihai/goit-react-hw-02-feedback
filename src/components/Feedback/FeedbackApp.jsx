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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if(total === 0) return '0';

    return ((good / total) * 100).toFixed(2);
  }

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
        <p>Total feedbacks: {this.countTotalFeedback()}</p>
        <p>Positive feedbacks percentage: {this.countPositiveFeedbackPercentage() + '%'}</p>
        </div>
    )
  }
}
