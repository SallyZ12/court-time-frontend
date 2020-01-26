import React from 'react';

import CourtInput from '../components/CourtInput'
import { addCourt } from '../actions/addCourt'
import { connect } from 'react-redux'

const NewCourtFormWrapper = ( {history, addCourt }) => {

  const handleSubmit = (courtData, clubId) => {

    console.log("courtData", courtData)

      addCourt({
       ...courtData,
       clubId
    }, history)
  }

  return <CourtInput history= {history} handleSubmit={handleSubmit} />
}

export default connect(null,  { addCourt })(NewCourtFormWrapper)
