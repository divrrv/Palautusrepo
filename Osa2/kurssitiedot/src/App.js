//Show data inside course
const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content course={course} />
    <Total course={course} />
  </div>
)
//Show courses
const Courses = ({ courses }) =>
  <div>
    {courses.map(course =>
      <Course key={course.id} course={course} />
    )}
  </div>

//Course name
const Header = ({ course }) => {
  return (
    <h3>
      {course}
    </h3>
  )
}
//Parts and number of exercises in them
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}
//Name and number of the part 
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
//Sum exercises
const Sum = ({ parts }) =>
  <>
    {parts.reduce((sum, part) =>
      sum + part.exercises, 0)}
  </>

//Total number of exercises
const Total = ({ course }) =>
  <div>
    <h4>total of <Sum parts={course.parts} /> exercises </h4>
  </div>


const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App