import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const percentage = (props.good / all * 100) + " %"

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
          <h1>STATISTICS</h1>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={props.good + props.neutral + props.bad}/>
          <StatisticLine text="average" value={props.score}/>
          <StatisticLine text="positive" value={percentage}/>
        </div>
      )
    }
}

const Button = (props) => {
  return (
      <button onClick={props.handler}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text}: {props.value}
    </div>
  )
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
      <Button handler={handleGood} text="good"/>
      <Button handler={handleNeutral} text="neutral"/>
      <Button handler={handleBad }text="bad"/>
      <Statistics good={good}neutral={neutral}bad={bad}score={score}/>
    </div>
  )
}

export default App