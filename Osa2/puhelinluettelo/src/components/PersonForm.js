import React from 'react'

const PersonForm = ({ onSubmit, nameValue, nameChange, numberValue, numberChange, text }) => {
  return (
    <form onSubmit={onSubmit}>
      <div> name: <input value={nameValue} onChange={nameChange} /></div>
      <div> number: <input value={numberValue} onChange={numberChange} /></div>
      <button type="submit">{text}</button>
    </form>
  )
}

export default PersonForm