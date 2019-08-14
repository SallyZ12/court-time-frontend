import React from 'react'
import court from '../court.png'
import '../App.css';


const Home = () => {
    return (

      <div className = "Home">
        <h2 className = "text-center"> Welcome to Court Time! </h2>
        <h4 className = "text-center"> Your Place To Reserve A Court </h4>
      <br/>
      <img src={court} width = '500' height = "250" alt="Court" class ="center" />
    </div>
    )
  }


export default Home
