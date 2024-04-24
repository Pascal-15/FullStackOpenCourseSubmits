const Content = (props) => {
  console.log("Content", props)
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}
const Header = (props) => {
  console.log("Header", props)
  const coursename = props.course.name
  return (
    <div>
      <h1>{coursename}</h1>
    </div>
  )
}
const Total = (props) => {
  console.log("Total", props)
  return (
    <div>
      Total: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App