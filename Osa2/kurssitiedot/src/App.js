const Course =({course}) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
  </div>
  )

//Course name
const Header = ({course}) => {
  return (
      <h1>
        {course}
      </h1>
  )
}
//Parts and number of exercises in them
const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
        )}
    </div>
  )
}
//Name and number of the part 
const Part = ({part}) => {
  return (
      <p>
        {part.name} {part.exercises}
      </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App