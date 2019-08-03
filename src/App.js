import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'
import { getCurrentUser } from './actions/currentUser'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render () {
    return (
      <div className="App">
        <NavBar />
        <br/>
        <Login  />
        <br/>
        <Logout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUserReducer
  })
}



export default connect(mapStateToProps, { getCurrentUser })(App);
