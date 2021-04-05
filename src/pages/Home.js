import { useState, useEffect } from 'react';
import axios from 'axios';
import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import '../App.css';
import MiniCard from '../components/MiniCard.js';

function Home() {
  const [users, setUsers] = useState(null);
  let descendingUsers;
  let topFiveFollowing;
  let topFiveNotFollowing;
  // first we need to populate our data
  // bascially so that we dont need to visit the page to add data
  const addData = async () => {
    await axios.post('/.netlify/functions/addData');
  };
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/posts');
    // console.log(results.data);
    setUsers(results.data);
  };
  useEffect(() => {
    addData();
    fetchData();
  }, []);

  // bascially i want to sort the user in descending order of their id which can be sort by .sort()
  if (users) {
    // the descending users is for the descended user for thee Cardjs
    descendingUsers = users.sort((a, b) => (a.id < b.id ? 1 : -1));

    // for the following of which we are following
    // we got people we are following
    const following = users.filter((user) => user.is_followed === true);
    // basically descending order on the basis of likes here
    const descendingFollowing = following.sort((a, b) =>
      a.likes < b.likes ? 1 : -1
    );
    // slicing the top 5 only
    topFiveFollowing = descendingFollowing.slice(0, 5);
    // for the suggested accounts
    const notFollowing = users.filter((user) => user.is_followed === false);
    const descendingNotFollowing = notFollowing.sort((a, b) =>
      a.likes < b.likes ? 1 : -1
    );
    topFiveNotFollowing = descendingNotFollowing.slice(0, 5);
  }

  return (
    // if descending user exist only we want to show this user
    <>
      {descendingUsers && (
        <div className="container">
          <FollowersColumn users={topFiveFollowing} />
          <div className="feed">
            {descendingUsers.map((descendingUser, index) => (
              <Card key={index} user={descendingUser} />
            ))}
          </div>
          <div className="suggested-box">
            <div className="section">
              <div className="suggested">
                <h2 className="bold">Suggested Accounts</h2>
                <div className="break" />
                {/* basically top 5 not following in the suggested accounts */}
                {topFiveNotFollowing.map((notFollowingUser, index) => (
                  <MiniCard key={index} user={notFollowingUser} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
