import React from 'react';

import CourtInput from '../components/CourtInput'
import { addCourt } from '../actions/addCourt'
import { connect } from 'react-redux'

const NewCourtFormWrapper = ( {history, addCourt }) => {

  const handleSubmit = (courtData, courtId, club_id) => {  

      addCourt({
       ...courtData,
       courtId,
    }, history)
  }

  return <CourtInput history= {history} handleSubmit={handleSubmit} />
}

export default connect(null,  { addCourt })(NewCourtFormWrapper)
