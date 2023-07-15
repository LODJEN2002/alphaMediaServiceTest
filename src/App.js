import React, { useState } from 'react';
import './App.css'
import CompForm from './components/CompForm';
import Profile from './components/Profile';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false)
  return (
    loggedIn ?
      <Profile
        setLoggedIn={setLoggedIn}
      />
      :
      <CompForm
        setLoggedIn={setLoggedIn}
      />

  );
};

export default App;