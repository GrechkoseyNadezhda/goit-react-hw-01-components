import user from '../base/user';
import data from '../base/data';
import friends from '../base/friends';
import transactions from '../base/transactions';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyleComponent } from 'styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
      <GlobalStyleComponent />
    </>
  );
};
