
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import LigaPadel from './components/LigaPadel';
import Chess from './components/Chess';
import StringValue from './components/StringValue';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
      <Router>
        <div>
          <Navigation />

          <Switch>
            <Route path="/problem-1">
              <LigaPadel />
            </Route>
            <Route path="/problem-2">
              <Chess />
            </Route>
            <Route path="/problem-3">
              <StringValue />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
