import React from 'react'
import{connect} from 'react-redux'
import {addCourt} from '../actions/addCourt'
import Button from 'react-bootstrap/Button';

class CourtInput extends React.Component {
  state = {
    court_number: "",
    court_surface: "Hard",
    prime: "",
    non_prime: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    this.props.addCourt(this.state, this.props.club.id)
    this.setState({
      court_number: "",
      surface: "Hard",
      prime: "",
      non_prime: ""
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="Input">
        <h5> New Court </h5>
          <input type= 'integer'
                placeholder = "Court #"
                value = {this.state.court_number}
                name = 'court_number'
                onChange={this.handleChange}/><br/>
                <label> Surface </label>
          <select
               name = 'surface'
               value = {this.state.surface}
               onChange = {this.handleChange}>
               <option value = "clay">Clay</option>
               <option value = "hard">Hard</option>
               <option value = "har-tru">Har-Tru</option>
               <option value = "grass">Grass</option>
          </select><br/>
          <input type= 'integer'
                placeholder = "Prime Rate"
                value = {this.state.prime}
                name = 'prime'
                onChange={this.handleChange}/><br/>

          <input type= 'integer'
                  placeholder = "Non-Prime Rate"
                  value = {this.state.non_prime}
                  name = 'non_prime'
                  onChange={this.handleChange}/><br/>
          <br/>
          <Button variant="primary"><input type="submit" value="New Court"/></Button>
        </form>
        </div>
    )
  }

}

export default connect(null, {addCourt})(CourtInput)
