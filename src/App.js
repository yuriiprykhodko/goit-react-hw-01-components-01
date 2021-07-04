import "./App.css";
import user from "./user.json";
import Profile from "./components/Profile/profile";
import Statistics from "./components/Statistics/statistics";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/friendList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/transactionHistory";
import Container from './components/Container/container';
function App() {
  return (
    <>
      <Container>
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
        </Container>
    </>
  );
}

export default App;
