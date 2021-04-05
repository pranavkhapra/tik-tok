import { useState, useEffect } from 'react';
import axios from 'axios';
import FollowersColumn from '../components/FollowersColumn';
import '../App.css';

function Home() {
  const [users, setUsers] = useState();
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
  return (
    <div className="container">
      Home
      <FollowersColumn />
      <div className="feed" />
      <div className="suggested-box" />
    </div>
  );
}

export default Home;
