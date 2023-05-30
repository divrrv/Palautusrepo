import React from 'react'

const Filter = ({ handleFilterChange }) => {
  return (
    <div>Filter shown with <input onChange={(event) => handleFilterChange(event)} /></div>
  )
}

export default Filter