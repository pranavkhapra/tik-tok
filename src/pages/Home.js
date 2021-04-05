import FollowersColumn from "../components/FollowersColumn"
import "../App.css"
function Home() {
  return (
    <div className="container">
      Home
     <FollowersColumn/>
     <div className="feed"></div>
     <div className="suggested-box"></div>
    </div>
  );
}

export default Home;
