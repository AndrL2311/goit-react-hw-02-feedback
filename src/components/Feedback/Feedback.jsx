import React from 'react';
import s from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = event => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onClickNeutral = event => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onClickBad = event => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const PositiveFeedback = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return PositiveFeedback > 0 ? PositiveFeedback : 0;
  }

  render() {
    return (
      <div className={s.container}>
        <p className="title">Please leave feedback</p>
        <div className={s.controls}>
          <button className={s.button} type="button" onClick={this.onClickGood}>
            Good
          </button>
          <button
            className={s.button}
            type="button"
            onClick={this.onClickNeutral}
          >
            Neutral
          </button>
          <button className={s.button} type="button" onClick={this.onClickBad}>
            Bad
          </button>
        </div>
        <ul className="statistics">
          <p className="title">Statistics</p>
          <li className="item">
            <span className={s.label}>Good:</span>
            <span className={s.value}>{this.state.good}</span>
          </li>
          <li className="item">
            <span className={s.label}>Neutral:</span>
            <span className={s.value}>{this.state.neutral}</span>
          </li>
          <li className="item">
            <span className={s.label}>Bad:</span>
            <span className={s.value}>{this.state.bad}</span>
          </li>
          <li className="item">
            <span className={s.label}>Total:</span>
            <span className={s.value}>{this.countTotalFeedback()}</span>
          </li>
          <li className="item">
            <span className={s.label}>Positive Feedback:</span>
            <span className={s.value}>
              {this.countPositiveFeedbackPercentage()}%
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
