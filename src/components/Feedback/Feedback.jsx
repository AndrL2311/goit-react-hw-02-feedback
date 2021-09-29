import React from 'react';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
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
        <p className="title">Statistics</p>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback is given" />
        )}
      </div>
    );
  }
}

export default Feedback;
