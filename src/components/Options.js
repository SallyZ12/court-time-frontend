import React from 'react'

const Options = ({options}) => {
  return  (
    options.map(option =>
                <option key={option.id} value={option.value}>
                {option.value}
                </option>)
               );
  }

export default Options
