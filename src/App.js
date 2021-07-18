import Home from "./components/Home.js";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from "./components/Notfound.js";
import Search from "./components/Search.js";
import Bucket from "./components/Bucket.js";

function App() {

  return (
    <>
      <Router>
        <header>
          <div>
            <ul className="navbar">
              <li className="li">
                <Link to="/">Home</Link>
              </li>
              <li className="li">
                <Link to="/search">Search</Link>
              </li>
              <li className="li">
                <Link to="/bucket">Bucket</Link>
              </li>
            </ul>
          </div>

          <h2>My Bucket</h2>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/bucket">
            <Bucket />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
