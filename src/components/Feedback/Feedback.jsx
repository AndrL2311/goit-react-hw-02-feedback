import s from './Feedback.module.css';

function Feedback() {
  return (
    <div className={s.container}>
      <p className="title">Please leave feedback</p>
      <ul className={s.controls}>
        <li>
          <button className={s.button} type="button">
            Good
          </button>
        </li>
        <li>
          <button className={s.button} type="button">
            Neutral
          </button>
        </li>
        <li>
          <button className={s.button} type="button">
            Bad
          </button>
        </li>
      </ul>
      <ul className="statistics">
        <p clasName="title">Statistics</p>
        <li className="item">
          <span className={s.label}>Good:</span>
          <span className={s.value}>0</span>
        </li>
        <li className="item">
          <span className={s.label}>Neutral:</span>
          <span className={s.value}>0</span>
        </li>
        <li className="item">
          <span className={s.label}>Bad:</span>
          <span className={s.value}>0</span>
        </li>
        <li className="item">
          <span className={s.label}>Total:</span>
          <span className={s.value}>0</span>
        </li>
        <li className="item">
          <span className={s.label}>Positive Feedback:</span>
          <span className={s.value}>0%</span>
        </li>
      </ul>
    </div>
  );
}

export default Feedback;
