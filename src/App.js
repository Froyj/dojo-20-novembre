import React, { Component } from 'react';
import UserListContainer from './containers/UserListContainer.js'
import AddUserButtonContainer from './containers/AddUserButtonContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserListContainer />
        <AddUserButtonContainer />
      </div>
    );
  }
}

export default App;
