import React from 'react'
import {connect} from 'react-redux'
import {addClub} from '../actions/addClub'
import { withRouter } from 'react-router-dom';


class ClubInput extends React.Component {

  state= {
    club_name: '',
    location: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addClub(this.state)
    this.props.history.push('/')
    this.setState({
      club_name:'',
      location: ''
    })
  }

  render(){

    return (
      <div>
          <h5> New Club </h5>
        <form onSubmit={this.handleSubmit}>
        <label> Club Name </label>
        <input type='text'
                placeholder='Name'
                value={this.state.club_name}
                name = 'club_name'
                onChange={this.handleChange}/><br/>
        <label> Location </label>
        <input type='text'
                placeholder='location'
                value={this.state.location}
                name = 'location'
                onChange={this.handleChange}/><br/>
              <input type = "submit"  value="New Club"/>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, {addClub})(ClubInput))
