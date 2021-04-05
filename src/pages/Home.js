import FollowersColumn from '../components/FollowersColumn';
import '../App.css';

function Home() {
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
