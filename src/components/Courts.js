import React from 'react'

const Courts = (props) => {
  return (
    <div>
    {props.courts && props.courts.map(court =>
    <li key={court.id}>
    {court.court_number} - {court.surface} - {court.prime} - {court.non_prime}</li>
  )}
  </div>
  )
}

export default Courts
