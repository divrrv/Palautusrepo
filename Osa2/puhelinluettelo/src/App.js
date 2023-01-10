import { useState } from 'react'
import Person from './components/Person'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newNumber, setNewNumbers] = useState([])

  const [newName, setNewName] = useState('')

  const savePerson = (event) => {
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName.toLowerCase()
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumbers('')
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

  const handleNumberChange = (event) => {
    setNewNumbers(event.target.value)
  }

  return (
    <div>
      <h1> Phonebook </h1>
      <form onSubmit={addPerson}>
        <p>
        name:
        <input value={newName} onChange={handlePersonChange}
        />
        </p>
        <p>
        number:
        <input value={newNumber} onChange={handleNumberChange}
        />
        </p>
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