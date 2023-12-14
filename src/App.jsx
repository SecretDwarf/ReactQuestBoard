import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import CharacterScreen from './CharacterScreen';
import Home from './Home';
import logo from './assets/react-quest-logo.png'
import "./App.css"

const App = () => {
  return (
    <Router>
      <div>
        <div className='nav'>
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/character">Avatar</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/character" element={<CharacterScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
