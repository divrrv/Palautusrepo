//Show data inside course
const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content course={course} />
    <Total course={course} />
  </div>
)
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

export default Course