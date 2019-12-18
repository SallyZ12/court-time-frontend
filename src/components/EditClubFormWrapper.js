import React from 'react';

import ClubInput from '../components/ClubInput'
import { editClub, setClubFormDataForEdit } from '../actions/editClub'

class EditClubFormWrapper extends React.Component {

  componentDidMount() {
    this.props.club && this.props.setClubFormDataForEdit(this.props.club)
  }

  componentDidUpdate(prevProps) {
    this.props.club && !prevProps.club && this.props.setClubFormDataForEdit(this.props.club)
  }


  handleSubmit = (clubFormData) => {
    const { editClub, club, history } = this.props
      editClub({
        ...clubFormData,
        clubId: club.id
      }, history)
  }

  render() {
    return <>
      <ClubInput editMode handleSubmit={this.handleSubmit} />
      <br/>
      </>
    }
}

export default connect(null, {editClub, setClubFormDataForEdit})(EditClubFormWrapper)
