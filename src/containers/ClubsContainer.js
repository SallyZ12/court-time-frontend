import React from 'react'
import {connect} from 'react-redux'
import {fetchClubs} from '../actions/fetchClubs'
import Clubs from '../components/Clubs'


class ClubsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchClubs()
  }

  render() {
    return (
      <div>
      <Clubs clubs={this.props.clubs}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("state:", state.clubsReducer)
  return {
    clubs: state.clubsReducer
  }
}

export default connect(mapStateToProps, {fetchClubs})(ClubsContainer)
