import React from 'react';

import ClubInput from '../components'
import { addClub } from '...actions/addClub'
import { connect } from 'react-redux'

const NewClubFormWrapper = ( {history, addClub }) => {

  const handleSubmit = (clubData, clubId) => {
      addClub({
       ...clubData,
       clubId
    }, history)
  }

  return <ClubInput history= {history} handleSubmit={handleSubmit} />
}

export default connect(null,  { addClub })(NewClubFormWrapper)
