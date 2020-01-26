import React from 'react'
import{connect} from 'react-redux'
import {updateCourtForm} from '../actions/editCourt'
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';

const CourtInput = ({ courtFormData, updateCourtForm, history, match, params, id, editMode, handleSubmit}) => {

  const {courtNumber, surface, prime, nonPrime} = courtFormData
  let clubId = match.params.id
console.log("courtFormData", courtFormData)

  const handleCourtInfoInputChange = event => {
    const { name, value } = event.target

    const updatedCourtFormInfo = {
    ...courtFormData,
    [name]: value
  }

  updateCourtForm(updatedCourtFormInfo)

}

    return (
      <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(courtFormData)
      }}>

        <h5> Court Data </h5>


            <label> Court Number </label>
              <input type= 'integer'
                placeholder = "Court #"
                value = {courtNumber}
                name = 'courtNumber'
                onChange={handleCourtInfoInputChange}/>
            <br/>


           <label>Surface</label>
              <select
               name = 'surface'
               value = {surface}
               onChange = {handleCourtInfoInputChange}>
               <option value = "Hard">Hard</option>
               <option value = "Clay">Clay</option>
               <option value = "Har-Tru">Har-Tru</option>
               <option value = "Grass">Grass</option>
            </select>
            <br/>

            <label> Prime Rate </label>
             <input type= 'integer'
                placeholder = "Prime Rate"
                value = {prime}
                name = 'prime'
                onChange={handleCourtInfoInputChange}/>
            <br/>

            <label> Non-Prime Rate </label>
              <input type= 'integer'
                  placeholder = "Non-Prime Rate"
                  value = {nonPrime}
                  name = 'nonPrime'
                  onChange={handleCourtInfoInputChange}/><br/>

        <Button variant="primary"><input type="submit" value={editMode ? "Update Court Info" : "New Court"}/></Button>
        </form>

      )
  }

const mapStateToProps = state =>{

  return{
    courtFormData: state.courtFormReducer
  }
}


export default withRouter(connect(mapStateToProps, {updateCourtForm})(CourtInput))
