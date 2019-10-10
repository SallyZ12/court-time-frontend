import React from 'react'
import{connect} from 'react-redux'
import {addCourt} from '../actions/addCourt'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';


class CourtInput extends React.Component {


  state = {
    courtNumber: "",
    surface: "Hard",
    prime: "",
    nonPrime: ""
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
    this.props.history.push(`/clubs/${clubId}`)
    this.setState({
      courtNumber: "",
      surface: "Hard",
      prime: "",
      nonPrime: ""
    })
  }


  render() {

    return (
      <div className = "Input">

        <h5> New Court Entry </h5>

        <Form onSubmit={this.handleSubmit} className="Input">

          <Form.Row>
            <Form.Group as={Col}>
              <input type= 'integer'
                placeholder = "Court #"
                value = {this.state.courtNumber}
                name = 'courtNumber'
                onChange={this.handleChange}/>
          </Form.Group>

        <Form.Group as={Col} >
        <Form.Label>Surface</Form.Label>
              <select
               name = 'surface'
               value = {this.state.surface}
               onChange = {this.handleChange}>
               <option value = "Hard">Hard</option>
               <option value = "Clay">Clay</option>
               <option value = "Har-Tru">Har-Tru</option>
               <option value = "Grass">Grass</option>
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
                  value = {this.state.nonPrime}
                  name = 'nonPrime'
                  onChange={this.handleChange}/><br/>
        </Form.Group>
        </Form.Row>

        </Form>

        </div>
    )
  }

}

export default withRouter(connect(null, {addCourt})(CourtInput))
