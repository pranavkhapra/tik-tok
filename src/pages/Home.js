import { useState, useEffect } from 'react';
import axios from 'axios';
import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import '../App.css';

function Home() {
  const [users, setUsers] = useState(null);
  let descendingUsers;
  // first we need to populate our data
  // bascially so that we dont need to visit the page to add data
  const addData = async () => {
    await axios.post('/.netlify/functions/addData');
  };
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/posts');
    console.log(results.data);
    setUsers(results.data);
  };
  useEffect(() => {
    addData();
    fetchData();
  }, []);

  // bascially i want to sort the user in descending order of their id which can be sort by .sort()
  if (users) {
    descendingUsers = users.sort((a, b) => (a.id < b.id ? 1 : -1));
  }

  return (
    // if descending user exist only we want to show this user
    <>
      {descendingUsers && (
        <div className="container">
          <FollowersColumn />
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
