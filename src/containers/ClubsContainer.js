import React from 'react'
import {connect} from 'react-redux'
import Club from '../components/Club'
import NewClubFormWrapper from '../components/NewClubFormWrapper'
import EditClubFormWrapper from '../components/EditClubFormWrapper'
import NewCourtFormWrapper from '../components/NewCourtFormWrapper'
import EditCourtFormWrapper from '../components/EditCourtFormWrapper'
// import CourtInput from '../components/CourtInput'
import { Route, Switch } from 'react-router-dom'

class ClubsContainer extends React.Component {

// fetch occurs in App so don't need this here, if leave here also when start App
// the first time receive a "TypeError" error since fetching twice
  // componentDidMount() {
  //   this.props.fetchClubs()
  // }

  render() {
    return (
      <div>
      <Switch>

        <Route exact path="/clubs/:id" render={(routerProps)=> <Club {...routerProps} clubs={this.props.clubs} currentUser={this.props.currentUser}/>}/>

        <Route exact path='/clubs' component = {NewClubFormWrapper} />
        <Route exact path="/clubs/:id/edit" render={(rProps)=> <EditClubFormWrapper {...rProps} clubs={this.props.clubs}/>}/>

        <Route exact path='/clubs/:id/courts' component = {NewCourtFormWrapper} />
        <Route exact path='/clubs/:id/courts/:id/edit' render={(rProps) => <EditCourtFormWrapper {...rProps} clubs={this.props.clubs} />}/>


      </Switch>

      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("state:", state.clubsReducer)
  return {
    clubs: state.clubsReducer,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ClubsContainer)
