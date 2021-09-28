import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  const listItem = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));

  return <ul className={s.list}>{listItem}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default FriendList;
