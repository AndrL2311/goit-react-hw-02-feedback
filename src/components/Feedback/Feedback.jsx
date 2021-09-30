import React from 'react';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import s from './Feedback.module.css';

class Feedback extends React.Component {
  constructor() {
    super();

    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    //Преобразуем ключи объекта в масив
    this.options = Object.keys(this.state);
  }

  onLeaveFeedback(event) {
    const name = event.target.textContent;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  }
  // Єти коментарии чтоб я не забыл как я делал
  // onLeaveFeedback = event => {
  //  const name = event.target.textContent;
  //   this.setState(prevState => {
  //     return {
  //       [name]: prevState[name] + 1,
  //     };
  //   });
  // };

  // onClickGood = event => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  countTotalFeedback() {
    // return this.state.good + this.state.neutral + this.state.bad;
    return this.options.reduce((acc, option) => acc + this.state[option], 0);
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
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
        </Section>
      </div>
    );
  }
}

export default Feedback;
