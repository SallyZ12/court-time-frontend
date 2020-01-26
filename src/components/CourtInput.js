import React from 'react'
import{connect} from 'react-redux'
import {updateCourtForm} from '../actions/editCourt'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';

const CourtInput = ({ courtFormData, updateCourtForm, history, editMode, handleSubmit}) => {

  const {courtNumber, surface, prime, nonPrime} = courtFormData
// console.log("courtFormdData", courtFormData)

  const handleCourtInfoInputChange = event => {
    const { name, value } = event.target
    const updatedCourtFormInfo = {
    ...courtFormData,
    [name]: value
  }

  updateCourtForm(updatedCourtFormInfo)
}
// class CourtInput extends React.Component {
//
//
//   state = {
//     courtNumber: "",
//     surface: "Hard",
//     prime: "",
//     nonPrime: ""
//   }
//
//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//
//   handleSubmit = (event)=> {
//     event.preventDefault()
//     let clubId = this.props.match.params.id
//     this.props.addCourt(this.state, clubId)
//     this.props.history.push(`/clubs/${clubId}`)
//     this.setState({
//       courtNumber: "",
//       surface: "Hard",
//       prime: "",
//       nonPrime: ""
//     })
//   }

    return (
      <div className = "Input">

      <Form onSubmit={event=> {
        event.preventDefault()
        handleSubmit(courtFormData)
      }}>

        <h5> Court Information </h5>

          <Form.Row>
            <Form.Group as={Col}>
              <input type= 'integer'
                placeholder = "Court #"
                value = {courtNumber}
                name = 'courtNumber'
                onChange={handleCourtInfoInputChange}/>
          </Form.Group>

        <Form.Group as={Col} >
        <Form.Label>Surface</Form.Label>
              <select
               name = 'surface'
               value = {surface}
               onChange = {handleCourtInfoInputChange}>
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
                value = {prime}
                name = 'prime'
                onChange={handleCourtInfoInputChange}/>

          <input type= 'integer'
                  placeholder = "Non-Prime Rate"
                  value = {nonPrime}
                  name = 'nonPrime'
                  onChange={handleCourtInfoInputChange}/><br/>
        </Form.Group>
        </Form.Row>

        </Form>

        </div>
    )
  }



export default withRouter(connect(null, {updateCourtForm})(CourtInput))
