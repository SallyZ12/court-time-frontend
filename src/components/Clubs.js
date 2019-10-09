import React from 'react'
import {Link} from 'react-router-dom'


class Clubs extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

    handleClick = (clubId) => {
      this.state[clubId] ? this.setState({[clubId]: this.state[clubId] + 1}) : this.setState({[clubId]: 1})
    }


  render(){

    const {clubs} = this.props

    return (
      <div>
      {clubs && clubs.map(club =>
        <p className ='text-center' key={club.id}>
        <Link to={`/clubs/${club.id}`}> {club.club_name} - {club.location} - {club.courts.length} Courts </Link>   <button  onClick = {(event) => this.handleClick(club.id)}  >Vote {this.state[club.id]}  </button><br/>
        </p>)}
      </div>
      )
    }
  }

export default Clubs
