import React from 'react';

import CourtInput from '../components/CourtInput'
import { setCourtFormDataForEdit, resetCourtForm } from '../actions/editCourt'
import { editCourt } from '../actions/addCourt'
import {connect} from 'react-redux'

class EditCourtFormWrapper extends React.Component {


  componentDidMount() {

    this.props.clubs.clubs && this.props.setCourtFormDataForEdit(this.props.clubs.clubs.filter(club => club.id === parseInt(this.props.match.params.id))[0])

  }

  componentDidUpdate(prevProps) {
    this.props.clubs.clubs && !prevProps.clubs.clubs && this.props.setCourtFormDataForEdit(parseInt(this.props.match.params.id))
  }

  componentWillUnmount(){
    this.props.resetCourtForm()
  }

  handleSubmit = (courtFormData) => {
     const { editCourt, courtId = parseInt(this.props.match.params.id), history } = this.props

      editCourt({
        ...courtFormData,
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
