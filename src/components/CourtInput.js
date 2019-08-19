import React from 'react'
import{connect} from 'react-redux'
import {addCourt} from '../actions/addCourt'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    this.props.addCourt(this.state, this.props.club.id)
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
        <Form onSubmit={this.handleSubmit} className="Input">
          <Row>
            <Col>

          <input type= 'integer'
                placeholder = "Court #"
                value = {this.state.court_number}
                name = 'court_number'
                onChange={this.handleChange}/>
          <select
               name = 'surface'
               value = {this.state.surface}
               onChange = {this.handleChange}>
               <option value = "clay">Clay</option>
               <option value = "hard">Hard</option>
               <option value = "har-tru">Har-Tru</option>
               <option value = "grass">Grass</option>
          </select>
          </Col>
          </Row>
            <Col>
              <Row>
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
          <Button variant="primary"><input type="submit" value="New Court"/></Button>
            </Row>
          </Col>

        </Form>
        </div>
    )
  }

}

export default connect(null, {addCourt})(CourtInput)
