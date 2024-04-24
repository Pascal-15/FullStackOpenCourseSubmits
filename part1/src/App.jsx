const Content = (props) => {
  console.log("Content", props)
  const parts = props.parts.map((part) => <Part part={part.name} exercise={part.exercises} />)
  return (
    <div>
      {parts}
    </div>
  )
}
const Header = (props) => {
  console.log("Header", props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Total = (props) => {
  console.log("Total", props)
  const parts = props.parts
  return (
    <div>
      Total: {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </div>
  )
}
const Part = (props) => {
  console.log("Part", props)
  return (
    <div>
      <p>{props.part}: {props.exercise}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}


export default App