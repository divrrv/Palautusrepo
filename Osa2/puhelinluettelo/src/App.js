import { useState } from 'react'
import Person from './components/Person'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newNumber, setNewNumbers] = useState([])

  const [newName, setNewName] = useState('')

  const [nameFilter, setNameFilter] = useState('')

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

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h1> Phonebook </h1>
      <p>filter shown with
        <input value={nameFilter} onChange={handleFilterChange} />
      </p>
      <h2> add a new </h2>
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
        {persons.filter(person =>
          (person.name.toLowerCase().includes(nameFilter.toLowerCase())))
          .map(person =>
            <Person
              key={person.id}
              person={person}
            />)}
      </div>
    </div>
  )
}

export default App