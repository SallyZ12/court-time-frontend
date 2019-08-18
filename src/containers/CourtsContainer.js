import React from 'react'
import CourtInput from '../components/CourtInput'
import Courts from '../components/Courts'

class CourtsContainer extends React.Component {
  render () {
    return (
    <div>
    <CourtInput club={this.props.club}/>
    <Courts courts = {this.props.club && this.props.club.courts}/>
    </div>
  )
  }
}

export default CourtsContainer
