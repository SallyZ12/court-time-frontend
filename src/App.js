import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'
import { getCurrentUser } from './actions/currentUser'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import UsersContainer from './containers/UsersContainer'



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render () {
    return (
      <div className="App">
        <h2> Court Time </h2>
        <br/>
        <NavBar />
        <br/>
        <UsersContainer />
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
