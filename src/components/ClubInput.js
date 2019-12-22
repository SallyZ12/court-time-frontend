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

  const {club_name, location} = clubFormData

  const handleClubInfoInputChange = event => {
    const { name, value } = event.target
console.log("clubFormData", clubFormData)
    const updatedClubFormInfo = {
    ...clubFormData,
    [name]: value
  }
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
      <div>

        <form onSubmit={event => {
          event.preventDefault()
          handleSubmit(clubFormData)
        }}>
        <h5> New Club/Edit Club </h5>
        <label> Club Name </label>
        <input type='text'
                placeholder='Name'
                value={club_name}
                name = 'club_name'
                onChange={handleClubInfoInputChange}/><br/>
        <label> Location </label>
        <input type='text'
                placeholder='location'
                value={location}
                name = 'location'
                onChange={handleClubInfoInputChange}/><br/>

        <input type = "submit"  value={editMode ?   "Update Club Info" : "New Club" }/>
        </form>
      </div>
    )
  }

  const mapStateToProps = state => {
  console.log("MSTP-clubFormData:", state.clubsReducer)
    return {
      clubFormData: state.clubsReducer
    }
  }

export default withRouter(connect(mapStateToProps, {updateClubForm})(ClubInput))

  // <input type = "submit"  value= "New Club"/>
// <input type = "submit"  value={editMode ? "Update Club Info" : "New Club"}/>
