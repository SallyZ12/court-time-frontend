import React from 'react'
import {Link} from 'react-router-dom'


class Clubs extends React.Component {

    state= {
      vote: 0
    }

    handleClick = (event) => {
      this.setState(prevState => ({
          vote: prevState.vote + 1
      }))}



  render(){

    const {clubs} = this.props


    return (

      <div>


      {clubs && clubs.map(club =>
        <p className ='text-center' key={club.id}>

        <Link to={`/clubs/${club.id}`}> {club.clubName} - {club.location} - {club.courts.length} Courts </Link>   <button onClick = {this.handleClick} >Vote {this.state.vote} </button><br/>
        </p>)}
      </div>
      )
    }
  }









// console.log("clubs", clubs)





export default Clubs
