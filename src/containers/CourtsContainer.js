import React from 'react'
import CourtInput from '../components/CourtInput'


class CourtsContainer extends React.Component {
  render () {
    return (
    <div>
    <CourtInput club={this.props.club}/>

    </div>
  )
  }
}

export default CourtsContainer
