import React from 'react'
import{connect} from 'react-redux'
import {addCourt} from '../actions/addCourt'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';


class CourtInput extends React.Component {


  state = {
    court_number: "",
    surface: "hard",
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
    let clubId = this.props.match.params.id
    this.props.addCourt(this.state, clubId)
    this.props.history.push('/')
    this.setState({
      court_number: "",
      surface: "hard",
      prime: "",
      non_prime: ""
    })
  }


  render() {

    return (
      <div>

        <h5> New Court Entry </h5>
        <Form onSubmit={this.handleSubmit} className="Input">

          <Form.Row>
            <Form.Group as={Col} >
          <input type= 'integer'
                 placeholder = "Court #"
                value = {this.state.court_number}
                name = 'court_number'
                onChange={this.handleChange}/>
          </Form.Group>

        <Form.Group as={Col} >
        <Form.Label>Surface</Form.Label>
         <select
               name = 'surface'
               value = {this.state.surface}
               onChange = {this.handleChange}>
               <option value = "clay">Clay</option>
               <option value = "hard">Hard</option>
               <option value = "har-tru">Har-Tru</option>
               <option value = "grass">Grass</option>
          </select>
            <Button variant="primary"><input type="submit" value="Submit"/></Button>
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} >

          <input type= 'integer'
                placeholder = "Prime Rate"
                value = {this.state.prime}
                name = 'prime'
                onChange={this.handleChange}/>

          <input type= 'integer'
                  placeholder = "Non-Prime Rate"
                  value = {this.state.non_prime}
                  name = 'non_prime'
                  onChange={this.handleChange}/><br/>
        </Form.Group>
        </Form.Row>

        </Form>

        </div>
    )
  }

}

export default withRouter(connect(null, {addCourt})(CourtInput))
// this.props.match.params.id

// If I want to redirect to Club page after creating a new court
// this.props.history.push(`/clubs/${this.props.match.params.id}`)
