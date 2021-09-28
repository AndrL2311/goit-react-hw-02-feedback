import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  const StatisticItem = stats.map(stat => (
    <li
      className={s.item}
      key={stat.id}
      style={{ backgroundColor: randomColor() }}
    >
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}%</span>
    </li>
  ));

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>{StatisticItem}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

function randomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}

export default Statistics;
