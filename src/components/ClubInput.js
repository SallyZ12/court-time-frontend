import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateClubForm } from '../actions/editClub'

class ClubInput extends React.Component {

  state= {
    clubName: '',
    location: ''
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

  render(){

    const clubFormData = (this.state.clubName, this.state.location)

    const handleClubInfoInputChange = event => {
      const { name, value } = event.target

    const updatedClubFormInfo = {
      ...clubFormData,
      [name]: value
    }
    updateClubForm(updatedClubFormInfo)
  }

    const {editMode} = this.state
    const {handleSubmit} = this.state

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
                value={this.state.clubName}
                name = 'clubName'
                onChange={handleClubInfoInputChange}/><br/>
        <label> Location </label>
        <input type='text'
                placeholder='location'
                value={this.state.location}
                name = 'location'
                onChange={handleClubInfoInputChange}/><br/>

        <input type = "submit"  value={editMode ?   "Update Club Info" : "New Club" }/>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, {updateClubForm})(ClubInput))

  // <input type = "submit"  value= "New Club"/>
// <input type = "submit"  value={editMode ? "Update Club Info" : "New Club"}/>
