import React from 'react'
import{connect} from 'react-redux'
import uuid from 'uuid'
import moment from 'moment'

class ReservationInput extends React.Component {

  state = {
    day: "",
    rate: "",
    confirmId: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    const reservation = {this.state, confirmId: uuid()}
    this.setState({

      day: "",
      rate: "",
      confirmId: ""
    })
  }


  render() {
    return (
      <div>
      <h5> Reservation </h5>
      <Form>
        <Form.group as={Col}>
        <input type= 'date'


      </div>



    )
  }
}

export default ReservationInput
