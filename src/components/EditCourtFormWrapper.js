import React from 'react';

import CourtInput from '../components/CourtInput'
import { setCourtFormDataForEdit, resetCourtForm } from '../actions/editCourt'
import { editCourt } from '../actions/addCourt'
import {connect} from 'react-redux'

class EditCourtFormWrapper extends React.Component {



  componentDidMount() {

    let club1 = (this.props.clubs.clubs.filter(club => club.id === parseInt(this.props.match.url.split('/')[2]))[0])
    this.props.clubs.clubs && this.props.setCourtFormDataForEdit(club1.courts.filter(court => court.id === parseInt(this.props.match.params.id))[0])
  }

  componentDidUpdate(prevProps) {
    let club2 = (this.props.clubs.clubs.filter(club => club.id === parseInt(this.props.match.url.split('/')[2]))[0])
    this.props.clubs.clubs && !prevProps.clubs.clubs && this.props.setCourtFormDataForEdit(club2.courts.filter(court => court.id === parseInt(this.props.match.params.id))[0])
  }

  componentWillUnmount(){
    this.props.resetCourtForm()
  }

  handleSubmit = (courtFormData) => {

     const { editCourt, courtId = parseInt(this.props.match.params.id), clubId = parseInt(this.props.match.url.split('/')[2]), history } = this.props

      editCourt({
        ...courtFormData,
        courtId: courtId,
        clubId: clubId
      }, history)
  }

  render() {
    return <>
      <CourtInput editMode handleSubmit={this.handleSubmit} />
      <br/>
      </>
    }
}

export default connect(null, {editCourt, setCourtFormDataForEdit, resetCourtForm})(EditCourtFormWrapper)
