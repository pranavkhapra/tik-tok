import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home"
import Upload from "./pages/Upload"
import Header from "./components/Header"

function App() {
  return (
    <div>
<Router>
  <Header/>
       <Switch>
         <Route path="/" component={Home} exact></Route>
         <Route path="/upload" component={Upload}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
