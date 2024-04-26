import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [percentage, setPercentage] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setScore(score + 1)
    calculatePercentage()
    console.log("Good: ", good)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    calculatePercentage()
    console.log("Neutral: ", neutral)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setScore(score - 1)
    calculatePercentage()
    console.log("Bad: ", bad)
  }
  const calculatePercentage = () => {
    const calcP = (good / all) * 100
    setPercentage(calcP)
    console.log(percentage)
  }
  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>STATISTICS</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {score} </p>
      <p>positive: {percentage} %</p>
    </div>
  )
}

export default App