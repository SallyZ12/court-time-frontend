import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'

class App extends React.Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/clubs/1/reservations')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render () {
    return (
      <div className="App">
        <Login />
        <Logout />
      </div>
    );
  }
}

export default App;
