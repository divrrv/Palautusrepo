import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/PersonForm'
import Filtered from './components/Filtered'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const savePerson = (event) => {
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.id === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      savePerson()
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>

      <h3> Add a new contact </h3>
      <PersonForm 
        onSubmit={addPerson}
        nameValue={newName}
        nameChange={handleNameChange}
        numberValue={newNumber}
        numberChange={handleNumberChange}
        text="add"
      />

      <h3> Numbers </h3>

      <Filtered persons={persons} newFilter={newFilter}/>

    </div>

  )
}

export default App