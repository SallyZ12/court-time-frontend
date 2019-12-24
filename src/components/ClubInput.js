import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateClubForm } from '../actions/editClub'

// class ClubInput extends React.Component {
//
//   state= {
//     clubName: '',
//     location: ''
//   }

const ClubInput = ({ clubFormData, updateClubForm, history, handleSubmit, editMode}) => {

  const {clubName, location} = clubFormData

  const handleClubInfoInputChange = event => {
    const { name, value } = event.target

    const updatedClubFormInfo = {
    ...clubFormData,
    [name]: value
  }
  console.log("updatedClubFormInfo", updatedClubFormInfo)
  updateClubForm(updatedClubFormInfo)
}

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.addClub(this.state)
  //   this.props.history.push('/')
  //   this.setState({
  //     clubName:'',
  //     location: ''
  //   })
  // }

  // render(){

    return (

        <form onSubmit={event => {
          event.preventDefault()
          handleSubmit(clubFormData)
        }}>
        <h5> New Club/Edit Club </h5>
        <label> Club Name </label>
        <input type='text'
                placeholder='Name'
                value={clubName}
                name = 'clubName'
                onChange={handleClubInfoInputChange}/><br/>

        <label> Location </label>
        <input type='text'
                placeholder='location'
                value={location}
                name = 'location'
                onChange={handleClubInfoInputChange}/><br/>

        <input type = "submit"  value={editMode ?   "Update Club Info" : "New Club" }/>
        </form>

    )
  }

  const mapStateToProps = state => {
  console.log("MSTP-clubFormData:", state.clubFormReducer)
    return {
      clubFormData: state.clubFormReducer
    }
  }

export default withRouter(connect(mapStateToProps, {updateClubForm})(ClubInput))

  // <input type = "submit"  value= "New Club"/>
// <input type = "submit"  value={editMode ? "Update Club Info" : "New Club"}/>
