import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const percentage = (props.good / all * 100)

    if (all <= 0) {
      return (
        <div>
          No feedback given !
        </div>
      )
    }
    else {
      return (
        <div>
          good: {props.good} <br />
          neutral: {props.neutral} <br />
          bad: {props.bad} <br />
          all: {props.good + props.neutral + props.bad} <br />
          average: {props.score} <br />
          positive: {percentage} %
        </div>
      )
    }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setScore(score + 1)
    console.log("Good: ", good)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    console.log("Neutral: ", neutral)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setScore(score - 1)
    console.log("Bad: ", bad)
  }
  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>STATISTICS</h1>
      <Statistics good={good}neutral={neutral}bad={bad}score={score}/>
    </div>
  )
}

export default App