import React, { Component } from 'react';
import './App.scss';
import Avatar from './component/Avatar';
import Description from './component/Description';
import Eductions from './component/Eductions';


class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar />
        <Description />
        <Eductions />
      </main>
    );
  }
}
export default App;
