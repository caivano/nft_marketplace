import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import { Link } from 'react-router-dom';
import Artists from './screens/Artists/Artists';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>


      <BrowserRouter>

        <Link to="/">Home</Link>
        <Link to="/artists">Artists</Link>
        
        <Switch>
          <Route path="/artits">
            <Artists />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
