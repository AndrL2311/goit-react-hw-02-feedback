import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  const transactionItems = items.map(item => (
    <tr className={s.row} key={item.id}>
      <td className={s.bodyCell}>{item.type}</td>
      <td className={s.bodyCell}>{item.amount}</td>
      <td className={s.bodyCell}>{item.currency}</td>
    </tr>
  ));

  return (
    <table className={s.transaction}>
      <thead className={s.head}>
        <tr>
          <th className={s.headCell}>Type</th>
          <th className={s.headCell}>Amount</th>
          <th className={s.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionItems}</tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
