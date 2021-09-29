import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.controls}>
      <button className={s.button} type="button" onClick={this.onClickGood}>
        Good
      </button>
      <button className={s.button} type="button" onClick={this.onClickNeutral}>
        Neutral
      </button>
      <button className={s.button} type="button" onClick={this.onClickBad}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
