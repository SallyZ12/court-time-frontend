import React from 'react'
import court from '../court.png'
import '../style.css';
import Clubs from '../components/Clubs'


const Home = (props) => {
  // console.log("home:", props)
    return (

      <div className = "Home">
        <h2 className = "text-center"> Welcome to Court Time! </h2>
        <h4 className = "text-center"> Your Place To Reserve A Court </h4>
        <h4 className = "text-center"> Please select a Club </h4>
      <Clubs clubs = {props.home.clubs}/>
      <br/>
      <img src={court} width = '500' height = "250" alt="Court" className="center" />
    </div>
    )
  }


export default Home
