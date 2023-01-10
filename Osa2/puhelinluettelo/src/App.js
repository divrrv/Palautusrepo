import { useState } from 'react'
import Person from './components/Person'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')

  const savePerson = (event) => {
    const personObject = {
      name: newName,
      id: newName.toLowerCase()
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.id === newName.toLowerCase())) {
      window.alert(`${newName} is already included`)
    } else {
      savePerson()
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h1> Phonebook </h1>
      <form onSubmit={addPerson}>
        name:
        <input value={newName} onChange={handlePersonChange}
        />
        <button type="submit"> add </button>
      </form>
      <h2> Numbers </h2>
      <div>
        {persons.map(person =>
          <Person
            key={person.id}
            person={person}
          />)}
      </div>
    </div>
  )

}

export default App