import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ToDoList from './ToDoList';
import Login from './Login';
import CharacterScreen from './CharacterScreen';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todo">ToDoList</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/character">CharacterScreen</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/todo">
            <ToDoList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/character">
            <CharacterScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
