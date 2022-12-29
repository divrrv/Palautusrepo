import { useState } from 'react'

const StatisticsLine = ({ text, value }) => <div>{text}{value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 + " %"

  if (all===0)
  return (
    <div>No feedback given</div>
  )
  else
  return (
    <div>
      <StatisticsLine text="good " value={good} />
      <StatisticsLine text="neutral " value={neutral} />
      <StatisticsLine text="bad " value={bad} />
      <StatisticsLine text="all " value={all} />
      <StatisticsLine text="average " value={average} />
      <StatisticsLine text="positive " value={positive} />
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +1)
  }

  const handleBadClick = () => {
    setBad(bad +1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
