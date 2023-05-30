import React from 'react'
import Person from './Person'

const Filtered = ({ persons, newFilter}) => {
    return (
        <div>
            {persons.filter(person =>
        (person.name.toLowerCase().includes(newFilter.toLowerCase())) || (person.number.includes(newFilter)))
        .map(person =>
          <Person
            key={person.name}
            person={person}
          />)}
        </div>
    )
}

export default Filtered