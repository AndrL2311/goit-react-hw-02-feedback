import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import FriendList from './components/friendList/FriendList';
import friendsData from './components/friendList/friends.json';
import trasactionData from './components/transactions/transactions.json';
import TransactionHistory from './components/transactions/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={trasactionData} />
    </div>
  );
}

export default App;
