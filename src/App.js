import React from 'react';


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/clubs/1/reservations')
    .then(response => response.json())
    .then(data => console.log("clubs/1/reservations:",data[1].user))
  }

  render () {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
