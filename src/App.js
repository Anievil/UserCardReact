import React, { Component } from 'react';
import UserCard from './component/UserCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <UserCard />;
  }
}

export default App;
