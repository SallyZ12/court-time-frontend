import React from 'react'
import {connect} from 'react-redux'
import Clubs from '../components/Clubs'


class ClubsContainer extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <Clubs/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clubs: state.clubsReducer
  }
}

export default connect(mapStateToProps)(ClubsContainer)
